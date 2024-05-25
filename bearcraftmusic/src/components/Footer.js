import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; 
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h3>Links</h3>
        <ul>
          <li><a href="/About">About</a></li>
          <li><a href="/Shop">Shop</a></li>
          <li><a href="/Video">Video</a></li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Connect</h3>
        <ul className="social-icons">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a></li>
        </ul>
      </div>
      <div className="footer-section">
        <p>&copy; {new Date().getFullYear()} Bearcraft Music. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
