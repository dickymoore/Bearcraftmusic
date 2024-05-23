import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../global.css';
import './Header.css';

function Header() {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    setIsHomePage(location.pathname === '/');
  }, [location]);

  return (
    <header className={`header ${isHomePage ? 'black-bg' : 'white-bg'}`}>
      <Link to="/" className="logo">Logo</Link>
      <nav>
        <ul className="menu">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/music">Music</Link></li>
          <li><Link to="/videos">Videos</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
