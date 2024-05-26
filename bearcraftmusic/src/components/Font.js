import React, { useEffect } from 'react';
import { googleFont } from '../config/constants';

const Font = () => {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = `https://fonts.googleapis.com/css2?family=${googleFont}&display=swap`;
    fontLink.rel = 'stylesheet';
    fontLink.onload = () => document.documentElement.classList.add('font-loaded');
    fontLink.onerror = () => console.error('Failed to load font');
    document.head.appendChild(fontLink);
  }, []);

  return null;
}

export default Font;
