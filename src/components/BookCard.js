import PropTypes from "prop-types";
import * as BooksApi from "../util/BooksAPI";
import camelCase from "../helpers/camelCase";

const BookCard = ({ book, setBooks, shelves }) => {
  // when shelf update  then call update endpoint and after the update get all the books and display it
  const handelBookShelfChange = (e) => {
    BooksApi.update(book, e.target.value).then(() => {
      BooksApi.getAll().then((res) => {
        setBooks(res);
      });
    });
  };

  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: book.imageLinks
              ? `url(${book.imageLinks.smallThumbnail})`
              : "",
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            onChange={handelBookShelfChange}
            defaultValue={book.shelf || "None"}
          >
            <option value="none" disabled>
              Move to...
            </option>

            {shelves.map((shelf) => {
              return (
                <option key={shelf} value={camelCase(shelf)}>
                  {shelf}
                </option>
              );
            })}

            <option value="None">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{book.title}</div>
      <div className="book-authors">
        {book.authors ? book.authors.map((author) => author + " ") : ""}
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.object.isRequired,
  setBooks: PropTypes.func.isRequired,
  shelves: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default BookCard;
