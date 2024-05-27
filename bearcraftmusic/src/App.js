import React, { useEffect, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Font from './components/Font';
import './App.css';

const Home = lazy(() => import('./pages/Home'));
const Video = lazy(() => import('./pages/Video'));
const Audio = lazy(() => import('./pages/Audio'));
const About = lazy(() => import('./pages/About'));

const App = () => {
  useEffect(() => {
    // Facebook Pixel Code
    !(function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)})(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '755881004949718'); 
    fbq('track', 'PageView');
  }, []);

  return (
    <Router>
      <div className="App">
        <Font />
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Video" element={<Video />} />
            <Route path="/Audio" element={<Audio />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
