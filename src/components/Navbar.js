import React from 'react';
import { NavLink } from 'react-router-dom';
import '../css/App.css';

const Navbar = () => (
  <nav className="nav">
    <div className="logo">Bookstore CMS</div>
    <ul className="nav-links">
      <NavLink
        to="/"
        exact
        className="nav-link"
        activeClassName="active-link"
        active
      >
        Books
      </NavLink>
      <NavLink
        to="/categories"
        className="nav-link"
        activeClassName="active-link"
      >
        Categories
      </NavLink>
    </ul>
    <button className="icon-button" type="button">
      <span className="material-icons primary-color">person</span>
    </button>

  </nav>
);

export default Navbar;
