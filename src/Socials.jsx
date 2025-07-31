// src/pages/Socials.jsx

import React from 'react';
import './Socials.css'; // بنضيف ستايل خارجي

const Socials = () => {
  return (
    <div className="socials-container">
      <h2>تابعونا على مواقع التواصل</h2>
      <div className="socials-buttons">
        <button onClick={() => window.open('https://facebook.com/yourpage')}>
          <img src="/icons/facebook.png" alt="Facebook" />
          Facebook
        </button>

        <button onClick={() => window.open('https://instagram.com/yourpage')}>
          <img src="/icons/instagram.png" alt="Instagram" />
          Instagram
        </button>

        <button onClick={() => window.open('https://tiktok.com/@yourpage')}>
          <img src="/icons/tiktok.png" alt="TikTok" />
          TikTok
        </button>
      </div>
    </div>
  );
};

export default Socials;
