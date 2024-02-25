import React from 'react';
import './App.scss';
import './GallerySection.scss';
import './Header.scss';
import './Title.scss';
import './Footer.scss'
import './MiniBio.scss'
import './AboutSection.scss'
import './ContactSection.scss'
import Header from './components/Header';
import HomePage from './components/HomePage';
import NatureSection from './components/NatureSection';
import UrbanSection from './components/UrbanSection';
import ArtistSection from './components/ArtistSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutSection from './components/AboutSection';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/artist" element={<ArtistSection />} />
          <Route path="/nature" element={<NatureSection />} />
          <Route path="/urban" element={<UrbanSection />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
