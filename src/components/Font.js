// Font.js
import { useEffect } from 'react';
import { googleFont } from '../config/constants';

const Font = () => {
  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.href = `https://fonts.googleapis.com/css2?family=${googleFont}&display=swap`;
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    return () => {
      document.head.removeChild(fontLink);
    };
  }, []);

  return null;
}

export default Font;
