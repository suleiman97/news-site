import React from 'react';
import './About.css'; // سنضيف تنسيقات خاصة

function About() {
  return (
    <div className="about-page">
        {/* ✅ النص التعريفي */}
      <div className="about-description">
        <p>
          🎙️ نحن إذاعة <strong>AWR Arabia</strong>، صوت ينبض بالأمل والحياة.  
          نؤمن بقوة الكلمة وأثر الرسالة، ونسعى لنشر النور في عالم يعجّ بالضجيج.
        </p>
        <p>
          نعمل بروح الفريق، نحمل رسالة محبة وسلام إلى كل مستمع، أينما كان.
          برامجنا تُلامس القلب، وتفتح آفاقًا من الرجاء والمعرفة.
        </p>
        <p>
          💡 هدفنا أن نكون منصة تبث القيم، وتعزز التواصل الروحي، وتزرع الرجاء في النفوس.
        </p>
      </div>
      {/* ✅ صورة الفريق */}
      <div className="team-image-container">
        <img
          src="/team.png"
          alt="فريق الإذاعة"
          className="team-image"
        />
      </div>

     
    </div>
  );
}

export default About;
