import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSoundcloud, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSpotify, FaBars } from 'react-icons/fa';
import './Header.css';
import './BurgerMenu.css';

function Header() {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location]);

  const handleStateChange = (state) => {
    setIsOpen(state.isOpen);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className={`header ${isHomePage ? 'dark-bg' : 'light-bg'}`}>
      <Link to="/" className="logo">
        <img src="/images/BearcraftWebLogo20ptFDF3EF.png" alt="Bearcraft" className="logo-image" />
      </Link>
      <nav>
        <ul className="menu">
          <li><Link to="/Video">Video</Link></li>
          <li><Link to="/Audio">Audio</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Shop">Shop</Link></li> {/* Corrected closing tag */}
          <div className="social-icons">
            <a href="https://soundcloud.com/bearcraft" target="_blank" rel="noopener noreferrer"><FaSoundcloud /></a>
            <a href="https://www.facebook.com/Bearcraft/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/user/Bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://open.spotify.com/artist/63VxrRwKAytSfmlhI7SwN1" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
          </div>
        </ul>
        <div className={`hamburger-menu ${isHomePage ? 'hamburger-menu-dark' : 'hamburger-menu-light'}`} onClick={toggleMenu}>
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
            <Link to="/Shop" onClick={closeMenu}>Shop</Link>
          </div>
          <div className="bm-social-icons">
            <a href="https://soundcloud.com/bearcraft" target="_blank" rel="noopener noreferrer"><FaSoundcloud /></a>
            <a href="https://www.facebook.com/Bearcraft/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/user/Bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://open.spotify.com/artist/63VxrRwKAytSfmlhI7SwN1" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
