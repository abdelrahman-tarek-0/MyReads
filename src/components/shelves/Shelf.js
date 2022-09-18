import PropTypes from "prop-types";
import BookCard from "../BookCard";
import camelCase from "../../helpers/camelCase";

const shelf = ({ books, setBooks, onShelf, shelves }) => {
  // get the books for that shelf
  const shelfBooks = books.filter((book) => book.shelf === camelCase(onShelf));

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{onShelf}</h2>
      <div className="bookshelf-books">
        <ol className="books-grid">
          {shelfBooks.map((book) => (
            <li key={book.id}>
              <BookCard book={book} setBooks={setBooks} shelves={shelves} />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};
shelf.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  setBooks: PropTypes.func.isRequired,
  onShelf: PropTypes.string,
  shelves: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default shelf;
