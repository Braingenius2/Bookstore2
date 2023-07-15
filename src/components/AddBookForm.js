import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';

const AddBookForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();

    const newBook = {
      id: uuidv4(),
      category: '',
      title,
      author,
      progress: '0%',
      chapter: '',
    };

    onAdd(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        required
      />
      <button type="submit">
        Add Book
      </button>
    </form>
  );
};

AddBookForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default AddBookForm;
