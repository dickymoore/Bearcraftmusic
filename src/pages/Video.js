// Video.js

import React from 'react';
import './Video.css';

function Video() {
  const videoLinks = [
    "https://www.youtube.com/embed/eUpxFOJpD4k",
    "https://www.youtube.com/embed/pMqEHrnux3k",
    "https://www.youtube.com/embed/trl3Hn4LfTo",
    "https://www.youtube.com/embed/8vawrS8QMuA",
    "https://www.youtube.com/embed/mFnz0Y2xVwE",
    "https://www.youtube.com/embed/aUmo9gXerOc"
  ];

  return (
    <div className="video">
      <div className="video-grid">
        {videoLinks.map((link, index) => (
          <div key={index} className="video-container-video">
            <iframe 
              src={link} 
              title={`Bearcraft Music Videos ${index + 1}`} 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Video;
