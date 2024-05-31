// Header.js
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import './Header.css';
import './BurgerMenu.css';
import SocialIcons from './SocialIcons';

const Header = () => {
  const location = useLocation();
  const [headerClass, setHeaderClass] = useState('');

  useEffect(() => {
    const path = location.pathname.slice(1) || 'home';
    const lightBackgroundPaths = ['About', 'Audio', 'Video'];
    setHeaderClass(lightBackgroundPaths.includes(path) ? 'lightBackground' : 'darkBackground');
  }, [location]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${headerClass}`}>
      <Link to="/" className="logo">
        <img src="/images/BearcraftWebLogo20ptFDF3EF.png" alt="Bearcraft" className="logo-image" />
      </Link>
      <nav>
        <ul className="menu">
          <li><Link to="/Video">Video</Link></li>
          <li><Link to="/Audio">Audio</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><a href="https://shop.bearcraftmusic.com/" target="_blank" rel="noopener noreferrer">Shop</a></li>
          <div className="social-icons">
            <SocialIcons />
          </div>
        </ul>
        <div className={`hamburger-menu ${headerClass}`} onClick={toggleMenu}>
          <FaBars />
        </div>
        <div className={`bm-overlay ${isOpen ? 'bm-overlay-open' : ''}`} onClick={closeMenu}></div>
        <div className={`bm-menu ${isOpen ? 'bm-menu-open' : ''}`}>
          <Link to="/" onClick={closeMenu} className="bm-logo">
            <img src="/images/BearcraftWebLogo20ptFDF3EF.png" alt="Bearcraft" className="bm-logo-image" />
          </Link>
          <div className="bm-item-list">
            <Link to="/Video" onClick={closeMenu}>Video</Link>
            <Link to="/Audio" onClick={closeMenu}>Audio</Link>
            <Link to="/About" onClick={closeMenu}>About</Link>
            <a href="https://shop.bearcraftmusic.com/" target="_blank" rel="noopener noreferrer" onClick={closeMenu}>Shop</a>
          </div>
          <div className="bm-social-icons">
            <SocialIcons />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
