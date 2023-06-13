import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="header1">
      <nav className="navbar1">
        <Link to="/" className="logo"></Link>
        <ul className="nav-links">
          <li><NavLink to="/about" activeClassName="active"></NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active"></NavLink></li>
          <li><NavLink to="/contact" activeClassName="active"></NavLink></li>
          <li><NavLink to="/resume" activeClassName="active"></NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

