import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { addBook } from '../redux/books/booksSlice';

const AddBookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleAddBook = (e) => {
    e.preventDefault();

    const newBook = {
      item_id: uuidv4(),
      category: '',
      title,
      author,
      progress: '0%',
      chapter: '',
    };

    dispatch(addBook(newBook));
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="add-newbook-form">
      <h2 className="form-title">ADD NEW BOOK</h2>
      <form onSubmit={handleAddBook}>
        <input
          type="text"
          className="input title-input"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          className="input author-input"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
        <button type="submit" className="add-book-button">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
