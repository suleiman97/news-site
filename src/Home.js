import React from 'react';

function Home() {
  return (
    <div>
      <h1>🎥 البث المباشر</h1>
      <div className="video-container">
        <iframe
          src="https://closeradio.tv/awrara/"
          title="بث مباشر"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
      <p className="description">تابع آخر الأحداث المباشرة لحظة بلحظة من قناتنا!</p>

      <div className="prayer-request" id="prayer">
        <h2 className="form-title"> قدم طلبك للصلاة من أجلك</h2>
        <form className="prayer-form">
          <input type="text" placeholder="الاسم الكامل" required />
          <input type="email" placeholder="البريد الإلكتروني" required />
          <textarea placeholder="ما هو طلب الصلاة الخاص بك؟" required></textarea>
          <button type="submit">إرسال الطلب 🙏</button>
        </form>
      </div>
    </div>
  );
}

export default Home;
