import React, { Component } from "react";
import { render } from "react-dom";

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

const Book = ({ title, author, pages, freeBookmark }) => {
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

// State should be managed at the root node/component, in this case the Library component so things don't get muddled.
// Component life cycle components are only available in the class syntax
class Library extends Component {
  // static property
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

// ReactDOM.render()
render(<Library books={bookList} />, document.getElementById("root"));
