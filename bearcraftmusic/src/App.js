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
    console.log("App component rendered");
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
