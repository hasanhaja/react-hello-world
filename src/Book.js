import React from "react";
import PropTypes from "prop-types";

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

// This is type checking, basically
Book.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pages: PropTypes.number,
  freeBookmark: PropTypes.bool,
};

export default Book;
