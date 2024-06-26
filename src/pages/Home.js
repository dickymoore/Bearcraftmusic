import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="video-container-home">
          <iframe 
            src="https://www.youtube.com/embed/AlnioEJE8tg" 
            title="Bearcraft - Electronic Synth-Pop from the UK | YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
          ></iframe>
        </div>
        <img src="/images/Dicky-35-Contrast.jpg" alt="Bearcraft - Electronic Music Artist" className="home-image" />
      </div>
    </div>
  );
}

export default Home;