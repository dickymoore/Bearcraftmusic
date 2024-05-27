import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Font from './components/Font';
import './App.css';
import { FACEBOOK_PIXEL_ID, GOOGLE_ANALYTICS_ID } from './config/constants';

const Home = React.lazy(() => import('./pages/Home'));
const Video = React.lazy(() => import('./pages/Video'));
const Audio = React.lazy(() => import('./pages/Audio'));
const About = React.lazy(() => import('./pages/About'));

const App = () => {
  useEffect(() => {
    // Facebook Pixel Code
    (function(f, b, e, v, n, t, s) {
      if (f.fbq) return;
      n = f.fbq = function() {
        n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
      };
      if (!f._fbq) f._fbq = n;
      n.push = n;
      n.loaded = !0;
      n.version = '2.0';
      n.queue = [];
      t = b.createElement(e);
      t.async = !0;
      t.src = v;
      s = b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t, s);
    })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    window.fbq('init', FACEBOOK_PIXEL_ID);
    window.fbq('track', 'PageView');

    // Google Analytics Code
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ANALYTICS_ID}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GOOGLE_ANALYTICS_ID);
  }, []);

  return (
    <Router>
      <div className="App">
        <Font />
        <Header />
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Video" element={<Video />} />
            <Route path="/Audio" element={<Audio />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </React.Suspense>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
