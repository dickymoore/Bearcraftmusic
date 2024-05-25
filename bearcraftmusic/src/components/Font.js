import React from 'react';
import { googleFont } from '../config/constants';

console.log('Font loader invoked');
console.log('Google font:', googleFont);

const Font = () => {
    const fontLink = document.createElement('link');
    fontLink.href = `https://fonts.googleapis.com/css2?family=${googleFont}&display=swap`;
    fontLink.rel = 'stylesheet';
    document.head.appendChild(fontLink);

    console.log('Font link added to document head:', fontLink);
}

export default Font;
