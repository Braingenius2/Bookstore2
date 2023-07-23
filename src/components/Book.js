import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/booksSlice';
import CircularProgress from './CircularProgress';

const Book = ({ book }) => {
  const dispatch = useDispatch();
  const genres = ['Action', 'Science fiction', 'Economy', 'History'];

  // Generate a random index within the range of the array length
  const randomIndex = Math.floor(Math.random() * genres.length);

  // Use the random index to get the randomly selected value
  const randomGenre = genres[randomIndex];

  const handleRemoveBook = (bookId) => {
    dispatch(removeBook(bookId));
  };

  return (
    <div className="book">
      <div className="book-info">
        <p className="book-category">{randomGenre}</p>
        <h2 className="book-title">{book.title}</h2>
        <p className="book-author">{book.author}</p>
        <div className="action-buttons">
          <button type="button" className="action-button">Comments</button>
          <div className="vertical-divider" />
          <button type="button" className="action-button" onClick={() => handleRemoveBook(book.item_id)}>Remove</button>
          <div className="vertical-divider" />
          <button type="button" className="action-button">Edit</button>
        </div>
      </div>
      <div className="progress">
        <CircularProgress value={66} max={100} />
        <div className="completion-stat">
          <p className="percent-complete">66%</p>
          <p className="completed">Completed</p>
        </div>
        <div className="vertical-sep-progress" />
        <div className="current-chapter-container">
          <div>
            <p className="current-chapter-text">CURRENT CHAPTER</p>
            <p className="current-chapter">Chapter 17</p>
          </div>
          <div>
            <button className="update-button" type="button">UPDATE PROGRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default Book;
