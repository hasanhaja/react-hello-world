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

const Book = ({ title, author, pages }) => {
  return (
    <section>
      <h2>{title}</h2>
      <p>by: {author}</p>
      <p>Pages: {pages} pages</p>
    </section>
  );
};

// You need the component to be a class to have State and use the constructor method.
class Library extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

    // Whenever using a constructor method, you need to bind "this"
    // This statement will make "this" accessible within the context of
    // the below method.
    this.toggleOpenClosed = this.toggleOpenClosed.bind(this);
  }

  toggleOpenClosed() {
    // setState is asynchronous.
    // So if you're relying on previous state, you can use a callback function.
    // this.setState({
    //   open: !this.state.open,
    // });

    this.setState((prevState) => ({
      open: !prevState.open,
    }));
  }

  render() {
    console.log(this.state);
    const { books } = this.props;
    return (
      <div>
        <h1>The Libary is {this.state.open ? "open" : "closed"}</h1>
        <button onClick={this.toggleOpenClosed}>Open/Close</button>
        {books.map((book, i) => (
          <Book
            key={i}
            title={book.title}
            author={book.author}
            pages={book.pages}
          />
        ))}
      </div>
    );
  }
}

// ReactDOM.render()
render(<Library books={bookList} />, document.getElementById("root"));
