import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSoundcloud, FaSpotify } from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <footer className="footer" aria-label="Footer">
      <div className="footer-content">
        <div className="footer-section social-section">
          <ul className="social-icons">
            <li><a href="https://soundcloud.com/bearcraft" target="_blank" rel="noopener noreferrer" aria-label="Bearcraft on SoundCloud"><FaSoundcloud /></a></li>
            <li><a href="https://www.facebook.com/Bearcraft/" target="_blank" rel="noopener noreferrer" aria-label="Bearcraft on Facebook"><FaFacebookF /></a></li>
            <li><a href="https://twitter.com/bearcraftmusic" target="_blank" rel="noopener noreferrer" aria-label="Bearcraft on Twitter"><FaTwitter /></a></li>
            <li><a href="https://www.instagram.com/bearcraftmusic/" target="_blank" rel="noopener noreferrer" aria-label="Bearcraft on Instagram"><FaInstagram /></a></li>
            <li><a href="https://www.youtube.com/user/Bearcraftmusic" target="_blank" rel="noopener noreferrer" aria-label="Bearcraft on YouTube"><FaYoutube /></a></li>
            <li><a href="https://open.spotify.com/artist/63VxrRwKAytSfmlhI7SwN1" target="_blank" rel="noopener noreferrer" aria-label="Bearcraft on Spotify"><FaSpotify /></a></li>
          </ul>
        </div>
        <div className="footer-section subscribe-section">
          <div id="mc_embed_signup">
            <form action="https://bearcraftmusic.us10.list-manage.com/subscribe/post?u=e447d40fb160a6b602466cb1c&amp;id=0083f7fbc9&amp;f_id=00265ae5f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
              <div id="mc_embed_signup_scroll">
                <h2>Subscribe</h2>
                <div className="mc-field-group">
                  <input
                    type="email"
                    name="EMAIL"
                    className="required email"
                    id="mce-EMAIL"
                    placeholder="Email address"
                    required
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="email"
                    aria-label="Email address"
                  />
                </div>
                <div id="mce-responses" className="clear foot">
                  <div className="response" id="mce-error-response" style={{display: "none"}}></div>
                  <div className="response" id="mce-success-response" style={{display: "none"}}></div>
                </div>
                <div style={{position: "absolute", left: "-5000px"}} aria-hidden="true">
                  <input type="text" name="b_e447d40fb160a6b602466cb1c_0083f7fbc9" tabIndex="-1" value="" />
                </div>
                <div className="clear foot">
                  <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Bearcraft Music. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
