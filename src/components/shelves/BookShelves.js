import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Shelf from "./Shelf";

const BookShelves = ({ books, setBooks, shelves }) => {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          {shelves.map((onShelf) => {
            return (
              <Shelf
                key={onShelf}
                books={books}
                setBooks={setBooks}
                onShelf={onShelf}
                shelves={shelves}
              />
            );
          })}
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
};

BookShelves.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  setBooks: PropTypes.func.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookShelves;
