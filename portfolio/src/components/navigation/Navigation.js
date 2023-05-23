import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="logo">Blake Reece</Link>
        <ul className="nav-links">
          <li><NavLink to="/about" activeClassName="active">About</NavLink></li>
          <li><NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
          <li><NavLink to="/resume" activeClassName="active">Resume</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;

