import React, { useState } from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

const HomePage = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      category: 'Action',
      title: 'The Hunger Games',
      author: 'Suzanne Collins',
      progress: '64%',
      chapter: 'Chapter 17',
    },
    {
      id: 2,
      category: 'Science Fiction',
      title: 'Dune',
      author: 'Frank Herbert',
      progress: '8%',
      chapter: 'Chapter 3: "A Lesson Learned"',
    },
    {
      id: 3,
      category: 'Economy',
      title: 'Capital in the Twenty-First Century',
      author: 'Suzanne Collins',
      progress: '0%',
      chapter: 'Introduction',
    },
  ]);

  const handleAddBook = (newBook) => {
    setBooks((prevBooks) => [...prevBooks, newBook]);
  };

  const handleRemoveBook = (bookId) => {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== bookId));
  };

  return (
    <div>
      <BookList books={books} onDelete={handleRemoveBook} />
      <AddBookForm onAdd={handleAddBook} />
    </div>
  );
};

export default HomePage;
