import React from 'react';
import './Audio.css';

function Audio() {
  return (
    <div className="audio-page">
      <div className="content">
        <div className="album-section">
          <div className="image-section">
            <img src={`${process.env.PUBLIC_URL}/images/Bearcraft-Fabrefactions-Front-Cover.jpeg`} alt="Fabrefactions Album Cover" className="album-cover" />
            <div className="embed-section">
              <iframe 
                src="https://open.spotify.com/embed/album/2klCIucCC3tT6brhlhxeB8?utm_source=generator" 
                width="100%" 
                height="600"
                frameBorder="0" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Fabrefactions Spotify Album"
                style={{border: 'none'}}
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
        
        {/* New Album Section */}
        <div className="album-section reverse">
          <div className="image-section">
            <img src={`${process.env.PUBLIC_URL}/images/Bearcraft-Yestreen-Front-Cover.jpeg`} alt="Yestreen Album Cover" className="album-cover" />
            <div className="embed-section">
              <iframe 
                style={{borderRadius: "12px"}}
                src="https://open.spotify.com/embed/album/6BD5ILSZ1xR8FKSYMiYxth?utm_source=generator" 
                width="100%" 
                height="600"  // Set height to 600px to match the first embed
                frameBorder="0" 
                allowFullScreen="" 
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" 
                loading="lazy"
                title="Yestreen Spotify Album"
              ></iframe>
            </div>
          </div>
          <div className="text-section">
            <h2>Sweeping synths and swooping vocals provide an electro feast, with attention-grabbing breakdowns and instrumental landscapes for dessert</h2>
            <p>
              From the path of the werewolf we have entered the world of Bearcraft, one that combines spectral synths and electro beats with pagan, scientific, philosophical and English folk themes. Bearcraft’s debut album, released on Hottwerk Records, is a fantastical, mathematical combination of electro uppers and bewitching acoustic slow-burners, spinning folk yarns with an abundance of haunting melodies and the loveliest harmonies. Take Bearcraft’s debut single, The Werewolf, with its hypnotic drum patterns, Gallic disco basslines and cool, disembodied vocals, it tells a tale that takes us from animalistic primal urges, through folk devils, to a contemporary scene of dancing in soaring temperatures and midnight sunshine.
            </p>
            <p>
              Press Association Spot Plays: Steve Lamacq 6Radio / Annie Nightingale R1 Club support from Tittsworth, Nic Fanciulli, Eddy Temple-Morris, Kissy Sellout, Blaze Tripp, Tronik Youth, Larry Tee, Colin Sales, Gash DJs, Raymundo Rodriguez, Ken Fan, Fatboy Slim, Marc Roberts, Chris Coco, Brandon Block, Anil Chawla and many more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Audio;
