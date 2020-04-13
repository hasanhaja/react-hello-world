import React from "react";
import { render } from "react-dom";
import Library from "./Library";

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

// ReactDOM.render()
render(<Library books={bookList} />, document.getElementById("root"));
