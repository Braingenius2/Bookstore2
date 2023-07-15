import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav>
    <div className="logo">Bookstore CMS</div>
    <Link to="/">Books</Link>
    <Link to="/categories">Categories</Link>
  </nav>
);

export default Navbar;
