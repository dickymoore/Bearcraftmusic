import React from 'react';
import './Home.css';

function Home() {
  console.log("Home component rendered");
  return (
    <div className="home">
      <div className="content">
        <div className="video-container">
          <iframe 
            src="https://www.youtube.com/embed/AlnioEJE8tg" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <img src="/images/Dicky-35-Contrast.jpg" alt="Bearcraft" className="home-image" />
      </div>
    </div>
  );
}

export default Home;
