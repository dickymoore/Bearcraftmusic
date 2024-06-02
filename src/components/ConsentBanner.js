// ConsentBanner.js

import React, { useState, useEffect } from 'react';
import './ConsentBanner.css';

const ConsentBanner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookieConsent', 'false');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="consent-banner">
      <p>We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. You can manage your preferences and find more information in our <a href="/privacy-policy">Privacy Policy</a>.</p>
      <div className="consent-buttons">
        <button onClick={handleAccept}>Accept All</button>
        <button onClick={handleDecline}>Decline</button>
      </div>
    </div>
  );
};

export default ConsentBanner;
