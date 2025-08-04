import React from 'react';
import './Episodes.css';

const episodeData = [
  {
    number: 1,
    title: 'حلقة 1',
    src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_1',
  },
  {
    number: 2,
    title: 'حلقة 2',
    src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_2',
  },
  {
    number: 3,
    title: 'حلقة 3',
    src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_3',
  },
  {
    number: 4,
    title: 'حلقة 4',
    src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_4',
  },
  {
    number: 5,
    title: 'حلقة 5',
    src: 'https://www.youtube.com/embed/YOUR_VIDEO_ID_5',
  },
];

const Episodes = () => {
  return (
    <div className="episodes-page">
      <h2 style={{ color: 'black' }}>🎬 الحلقات المسجلة</h2>
      <div className="episode-grid">
        {episodeData.map((ep) => (
          <div key={ep.number} className="episode">
            <h3>{ep.title}</h3>
            <iframe
              width="100%"
              height="200"
              src={ep.src}
              title={ep.title}
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Episodes;
