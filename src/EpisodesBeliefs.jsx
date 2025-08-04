import React from 'react';
import './EpisodesBeliefs.css';

const Beliefs = () => {
  return (
    <div className="episodes-page">
      <h2>المعتقدات الأساسية مع تيد ويلسون</h2>
      <div className="episode-list">
        <div className="episode">
          <h3>الحلقة 1</h3>
          <iframe
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
            title="الحلقة 1"
            width="100%"
            height="315"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
