import React from 'react';
import './Header.css';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleNavLinkClick = (path) => {
    navigate(path);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <Link to="/" className="name">Blake Reece</Link>
        <ul className="nav-links">
          <li><button onClick={() => handleNavLinkClick('/about')}>About</button></li>
          <li><button onClick={() => handleNavLinkClick('/portfolio')}>Portfolio</button></li>
          <li><button onClick={() => handleNavLinkClick('/contact')}>Contact</button></li>
          <li><button onClick={() => handleNavLinkClick('/resume')}>Resume</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

