import React from 'react';
import { FaSoundcloud, FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaSpotify } from 'react-icons/fa';

const SocialIcons = () => (
  <>
    <a href="https://soundcloud.com/bearcraft" target="_blank" rel="noopener noreferrer"><FaSoundcloud /></a>
    <a href="https://www.facebook.com/Bearcraft/" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
    <a href="https://twitter.com/bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
    <a href="https://www.instagram.com/bearcraftmusic/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
    <a href="https://www.youtube.com/user/Bearcraftmusic" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
    <a href="https://open.spotify.com/artist/63VxrRwKAytSfmlhI7SwN1" target="_blank" rel="noopener noreferrer"><FaSpotify /></a>
  </>
);

export default SocialIcons;
