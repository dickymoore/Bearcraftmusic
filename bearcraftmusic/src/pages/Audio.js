import React from 'react';
import './Audio.css';

function Audio() {
  return (
    <div className="audio-page">
      <div className="content">
        <div className="image-section">
          <img src={`${process.env.PUBLIC_URL}/images/Bearcraft-Fabrefactions-Front-Cover.jpeg`} alt="Fabrefactions Album Cover" className="album-cover" />
          <div className="embed-section">
            <iframe 
              src="https://open.spotify.com/embed/album/2klCIucCC3tT6brhlhxeB8?utm_source=generator" 
              width="100%" 
              height="600"  // Adjusted height to show all songs
              frameBorder="0" 
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
              loading="lazy"
              style={{border: 'none'}}  // Removed border
            ></iframe>
          </div>
        </div>
        <div className="text-section">
          <h2>Explore the world of Bristol-based music collective Bearcraft on their electronically charged second album Fabrefactions.</h2>
          <p>
            Fabrefactions is Essex born musician/producer Dicky Moore aka Bearcraft’s lead protagonist's second album following his debut Yestreen. Over the album’s ten tracks, Fabrefactions moves upriver along the Thames, from Margate, through Leigh-on-Sea and into the capital of England. That journey is mapped out in gorgeous organic electronics, in overheard ghost stories and half-remembered urban myths. Here are tales of runaways and banshees, estuary witches, acid trips and seafront car-cruising, set to sounds that evoke everything from bankside industry to underground dancehalls and the ambient push and pull of the shoreline.
          </p>
          <p>
            Fabrefactions has caught the attention of online tastemakers like High Clouds, Cool Hunting, Analogue Trash, Skope, and When The Horn Blows. Further support for Bearcraft has come from Electronic Sound, Bearded Magazine and 6 Music. For fans of The Knife, Depeche Mode and Austra.
          </p>
          <blockquote>“Infinity catchy… Cure-like… a fully realised and strangely satisfying pop record. Impressive.” <b>The Digital Fix</b></blockquote>
          <blockquote>“So many hooks that you instantly stop everything you are doing and prepare for the onslaught of brilliant electro” <b>The 405</b></blockquote>
          <blockquote>“Great fun” God Is In The TV “A finely honed sense of radio friendly melody” <b>Indie London</b></blockquote>
          <blockquote>“Yestreen is an escapism album. You may find yourself captured and held in this sorcerer's fortress before you even know it.” <b>Bearded</b></blockquote>
        </div>
      </div>
    </div>
  );
}

export default Audio;
