import React from 'react';
import './Footer.css';
const Footer = () => {
  return (
    <footer>
      <ul>
        <li><a href="https://github.com/BlakeReece3"><img src={require('../../photos/github-mark.png')} alt="GitHub" className='logo'/></a></li>
        <li><a href="https://www.linkedin.com/in/blake-reece"><img src={require('../../photos/LI-In-Bug.png')} alt="LinkedIn" className='logo'/></a></li>
        <li><a href="https://stackoverflow.com">Stack Overflow</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
