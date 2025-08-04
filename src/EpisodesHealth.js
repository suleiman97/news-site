import React from 'react';
import './EpisodesHealth.css';

const Health = () => {
  console.log("✅ صفحة الصحة وصلت");

  return (
    <div className="health-page">
      <h2>برنامج الصحة</h2>
      <div className="health-list">
        <div className="health-item">
          <h3>الحلقة 1</h3>
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

export default Health;
