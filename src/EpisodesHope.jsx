import React from 'react';
import './EpisodesHope.css';

const Hope = () => {
  return (
    <div className="hope-page">
      <h2>{"برنامج الحياة والأمل"}</h2>
      <div className="hope-list">
        <div className="hope-item">
          <h3>{"الحلقة 1"}</h3>
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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

export default Hope;
