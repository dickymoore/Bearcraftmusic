import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Video from './pages/Video';
import Audio from './pages/Audio';
import About from './pages/About';
import Shop from './pages/Shop';
import Footer from './components/Footer';

import './App.css';

function App() {
  console.log("App component rendered");
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Video" element={<Video />} />
          <Route path="/Audio" element={<Audio />} />
          <Route path="/About" element={<About />} />
          <Route path="/Shop" element={<Shop />} />
          
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
