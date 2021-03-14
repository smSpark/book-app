import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import style from "./BookList.module.css";
import BookItem from "../BookItem/BookItem";
import { removeBook } from "../../redux/books/action";
import { setEditor } from "../../redux/editor/action";

function BookList({ toggleEditor }) {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const editBook = (book) => {
    dispatch(setEditor(book));
    toggleEditor();
  };

  return (
    <ul className={style.book_list}>
      {books.map((book) => (
        <BookItem
          key={book.id}
          title={book.book_title}
          date={book.book_date}
          author={book.book_author}
          img={book.book_img}
          editHandler={() => editBook(book)}
          removeHandler={() => dispatch(removeBook(book.id))}
        />
      ))}
    </ul>
  );
}

BookList.propTypes = {
  toggleEditor: PropTypes.func,
};

BookList.defaultProps = {
  toggleEditor: () => {},
};

export default BookList;
