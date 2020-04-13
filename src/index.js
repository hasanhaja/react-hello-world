import React, { Component } from "react";
import { render } from "react-dom";
import PropTypes from "prop-types";

const bookList = [
  { title: "The Sun Also Rises", author: "Ernest Hemingway", pages: 260 },
  {
    title: "Harry Potter and the philosopher's stone",
    author: "J.K. Rowling",
    pages: 560,
  },
  { title: "The power of habits", author: "Charles Duhigg", pages: 287 },
  { title: "Notes from a small island", author: "Bill Bryson", pages: 190 },
  { title: "Clojure Explained", author: "Rich Hickey", pages: 230 },
  { title: "Hamlet", author: "William Shakespeare", pages: 169 },
  { title: "The Amazing Spider-Man", author: "Stan Lee", pages: 521 },
  { title: "The Body", author: "Bill Bryson", pages: 870 },
];

/**
 * In function components you use the default parameters syntax in case of no data or whatever.
 */
const Book = ({
  title = "No Title Provided",
  author = "No Author",
  pages = 0,
  freeBookmark,
}) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
      <p>Free Bookmark Today: {freeBookmark ? "Yayyy!" : "Nah blud!"}</p>
    </section>
  );
};

// This is another syntax to creating components. It just returns the JSX component. Single line functions.
const Hiring = () => (
  <div>
    <p>The library is hiring. Visit www.library.com/jobs for more.</p>
  </div>
);

const NotHiring = () => (
  <div>
    <p>
      The library is not hiring. Check back later on www.library.com/jobs for
      more.
    </p>
  </div>
);

/**
 * In class components you use the static defaultProps in case of no data or whatever.
 */
class Library extends Component {
  // This is static property and it must be called this exactly
  static defaultProps = {
    books: [{ title: "Tahoe Tales", author: "Chet Whitley", pages: 1000 }],
  };

  // member variable
  state = {
    open: true,
    freeBookmark: true,
    hiring: false,
    data: [],
    loading: false,
  };

  // Todo: Can this become an async function?
  componentDidMount() {
    this.setState({ loading: true });
    fetch("https://hplussport.com/api/products/order/price/sort/asc/qty/1")
      .then((data) => data.json())
      .then((data) => this.setState({ data, loading: false }));
  }

  componentDidUpdate() {
    console.log("This component just updated.");
  }

  // In order to bind this now, you can use an arrow function. They auto bind.
  toggleOpenClosed = () => {
    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  };

  render() {
    console.log(this.state);
    const { books } = this.props;
    return (
      <div>
        {this.state.hiring ? <Hiring /> : <NotHiring />}

        {this.state.loading ? (
          "loading..."
        ) : (
          <div>
            {this.state.data.map((product) => {
              return (
                <div key={product.id}>
                  <h3>Library product of the week</h3>
                  <h4>{product.name}</h4>
                  <img alt={product.name} src={product.image} height={100} />
                  <h4 align="center">£{product.price}</h4>
                </div>
              );
            })}
          </div>
        )}

        <h1>The Libary is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Open/Close</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
            // Passing down state as a prop to the child.
            freeBookmark={this.state.freeBookmark}
          />
        ))}
      </div>
    );
  }
}

// This is helpful in debugging so you can specify what the prop is supposed to look like.
Library.propTypes = {
  books: PropTypes.array,
};

// This is type checking, basically
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool,
};

// ReactDOM.render()
render(<Library books={bookList} />, document.getElementById("root"));
