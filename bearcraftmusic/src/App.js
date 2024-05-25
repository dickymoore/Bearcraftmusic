import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Video from './pages/Video';
import Audio from './pages/Audio';
import About from './pages/About';
import Shop from './pages/Shop';
import Footer from './components/Footer';
import Font from './components/Font'; // Import the Font component
import './App.css';

function App() {
  useEffect(() => {
    console.log("App component rendered");
  }, []); // Added empty dependency array to useEffect

  return (
    <Router>
      <div className="App">
        <Font /> {/* Render the Font component here */}
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
