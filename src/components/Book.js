import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';

const Book = ({ book }) => {
  const dispatch = useDispatch();

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div>
      <p>{book.category}</p>
      <h2>{book.title}</h2>
      <p>{book.author}</p>
      <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Delete</button>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
