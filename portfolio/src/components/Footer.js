import React from 'react';
import './assets/Footer.css';
const Footer = () => {
  return (
    <footer>
      <ul>
        <li><a href="https://github.com/BlakeReece3"><img src={require('../photos/github-mark.png')} alt="GitHub" /></a></li>
        <li><a href="https://linkedin.com">LinkedIn</a></li>
        <li><a href="https://stackoverflow.com">Stack Overflow</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
