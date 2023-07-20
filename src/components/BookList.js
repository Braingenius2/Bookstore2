import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

const BookList = () => {
  const { books } = useSelector((state) => state.books);
  console.log(books[2]);
  return (
    <div>
      {books.map((book) => (<Book book={book} key={book.item_id} />))}
    </div>
  );
};

export default BookList;
