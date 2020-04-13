import React, { Component } from "react";
import PropTypes from "prop-types";
import Hiring from "./Hiring";
import NotHiring from "./NotHiring";
import Book from "./Book";

/**
 * In class components you use the static defaultProps in case of no data or whatever.
 */
export default class Library extends Component {
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
