import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './About';

function ScrollToPrayer() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#prayer") {
      const el = document.getElementById("prayer");
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return null;
}

function Home() {
  return (
    <>
      <ScrollToPrayer />
      <h1 className="title">🎥 البث المباشر</h1>
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
    </>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <Router>
      <div className="live-page">
        {/* ✅ Header */}
        <div className="header-bar">
          <img src="/awr360-logo-32x.png" alt="AWR360 Logo" className="logo" />
          <div className="menu-wrapper" ref={menuRef}>
            <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)}>☰</button>
            <div className={`dropdown-menu ${menuOpen ? 'open' : ''}`}>
              <Link to="/" onClick={() => setMenuOpen(false)}>🏠 الصفحة الرئيسية</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>👥 من نحن</Link>
              <Link to="/#prayer" onClick={() => setMenuOpen(false)}>🙏 قدم طلبك</Link>
            </div>
          </div>
        </div>

        {/* ✅ الصفحات */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <footer className="footer">
  <p>تابعونا على وسائل التواصل الاجتماعي 📱</p>
  <div className="social-icons">
    <a href="https://www.facebook.com/AWR360Arabic" target="_blank" rel="noopener noreferrer">
      <img src="/icons/facebook.png" alt="Facebook" />
    </a>
    <a href="https://www.instagram.com/awr_arabic/" target="_blank" rel="noopener noreferrer">
      <img src="/icons/instagram.png" alt="Instagram" />
    </a>
    <a href="https://www.tiktok.com/@awr_arabic" target="_blank" rel="noopener noreferrer">
      <img src="/icons/tiktok.png" alt="TikTok" />
    </a>
  </div>
</footer>
      </div>
    </Router>
    
  );
  


}

export default App;
