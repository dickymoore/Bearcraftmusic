import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'; // Import social media icons
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
          <li><a href="https://facebook.com"><FaFacebook /></a></li>
          <li><a href="https://twitter.com"><FaTwitter /></a></li>
          <li><a href="https://instagram.com"><FaInstagram /></a></li>
        </ul>
      </div>
      <div className="footer-section">
        <p>&copy; {new Date().getFullYear()} Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
