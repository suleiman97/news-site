import React from 'react';
import './EpisodesBeliefs.css';

const Beliefs = () => {
  return (
    <div className="episodes-page">
      <h2>المعتقدات الأساسية مع تيد ويلسون</h2>
      <div className="episode-list">
        <div className="episode">
          <h3>الحلقة 1</h3>
         <video width="100%" height="315" controls> 
         <source src="/videos/c:\Users\Translater\OneDrive\Desktop\Translated DStudioThe 28 Fundamental Beliefs with Ted Wilson\1.28 Fundamental Beliefs [Their Origin and Development]—Pastor Ted Wilson.mp4" type="video/mp4"/>
         </video>
        </div>
      </div>
    </div>
  );
};

export default Beliefs;
