import "./styles/App.css";
import Search from "./components/Search";
import BookShelves from "./components/shelves/BookShelves";
import * as BooksApi from "./util/BooksAPI";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

const App = () => {
  // vars and status

  // book state that holds all the books
  let [books, setBooks] = useState([]);

  // var that holds the shelf used:(actually, it is dynamic, if you add a shelf to the array let's say as 'Not Liked' it
  // will show on the site and on the book sidebar and you can add the book to that new shelf but the API doesn't allow
  // adding new shelf so that feature is here for show only)
  const shelves = ["Currently Reading", "Want to Read", "Read"];

  // getting the books from the api when the app is mounted
  useEffect(() => {
    BooksApi.getAll().then((res) => {
      setBooks([...res]);
    });
  }, []);

  return (
    <div className="app">
      {/* the routes for the app */}
      <Routes>
        {/* amin app route  */}
        <Route
          exact
          path="/"
          element={
            <BookShelves books={books} setBooks={setBooks} shelves={shelves} />
          }
        />

        {/* search route */}
        <Route
          exact
          path="/search"
          element={
            <Search books={books} setBooks={setBooks} shelves={shelves} />
          }
        />

        {/* when ever the user is lost just display the main page */}
        <Route
          path="*"
          element={
            <BookShelves books={books} setBooks={setBooks} shelves={shelves} />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
