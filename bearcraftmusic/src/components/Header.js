import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaSoundcloud, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';
import '../global.css';
import './Header.css';
import { logoHeightPercentage } from '../config/constants';

function Header() {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);
  


  useEffect(() => {
    setIsHomePage(location.pathname === '/');
    
    // Get the .header element
    var header = document.querySelector('.header');
    
    // Get its computed height
    var headerHeight = window.getComputedStyle(header).height;
    
    // Set the max-height of the header to match the height of the .menu
    header.style.maxHeight = headerHeight;
  
    // Calculate 90% of the header height
    var logoHeight = parseFloat(headerHeight) * logoHeightPercentage;
  
    // Set the height of the logo to 90% of the header height
    var logo = document.querySelector('.logo-image');
    logo.style.height = logoHeight + 'px';
  }, [location]);  

  return (
    <header className={`header ${isHomePage ? 'black-bg' : 'white-bg'}`}>
      <Link to="/" className="logo">
        <img src="/images/BearcraftWebLogo20ptFDF3EF.png" alt="Bearcraft" className="logo-image" />
      </Link>
      <nav>
        <ul className="menu">
          <li><Link to="/Video">Video</Link></li>
          <li><Link to="/Audio">Audio</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Shop">Shop</Link></li>
          <div className="social-icons">
            <a href="https://soundcloud.com/bearcraft" target="_blank" rel="noopener noreferrer"><FaSoundcloud /></a>
            <a href="https://www.facebook.com/Bearcraft/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com/bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/bearcraftmusic/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://www.youtube.com/user/Bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
            <a href="https://open.spotify.com/artist/63VxrRwKAytSfmlhI7SwN1" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
