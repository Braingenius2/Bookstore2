import React from 'react';
import BookList from './BookList';
import AddBookForm from './AddBookForm';

const HomePage = () => (
  <div className="homepage">
    <BookList />
    <div className="section-hr" />
    <AddBookForm />
  </div>
);

export default HomePage;
