import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useState } from "react";

import * as BooksApi from "../util/BooksAPI";
import BookCard from "./BookCard";

// search component
const Search = ({ books, setBooks, shelves }) => {
  // vars and states

  // search query
  let [query, setQuery] = useState("");

  // the result books from the search
  let [searchedBooks, setSearchedBooks] = useState([]);

  // validate function that check the searched books and add to it the correct shelf that need
  const validateBooksData = (searchedBooks) => {
    // loop on the searched books
    return searchedBooks.map((b) => {
      // get the matched searched book with the main page book
      const bookWithShelf = books.filter((book) => book.id === b.id)[0];

      // if it found it just add to it the shelf
      if (bookWithShelf) {
        b.shelf = bookWithShelf.shelf;
      }

      return b;
    });
  };

  // handle the input from the input field
  const handelInput = (e) => {
    query = e.target.value;
    setQuery(query);
    if (query) {
      BooksApi.search(query).then((res) => {
        setSearchedBooks(res.error ? [] : validateBooksData(res));
      });
    } else {
      setSearchedBooks([]);
    }
  };

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link className="close-search" to="/">
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            value={query}
            type="text"
            placeholder="Search by title, author, or ISBN"
            onChange={handelInput}
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {query // if there is query in the search input ?
            ? searchedBooks.error // if yes then check for now errors
              ? [] // if there is an error just display none
              : searchedBooks.map((book) => (
                  <li key={book.id}>
                    <BookCard
                      book={book}
                      setBooks={setBooks}
                      shelves={shelves}
                    />
                  </li>
                ))
            : [] // if there is no query just display none
          }
        </ol>
      </div>
    </div>
  );
};

Search.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  setBooks: PropTypes.func.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Search;
