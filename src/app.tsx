import React, {useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import ServicesPage from './pages/ServicesPage';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import LayananHilti from './pages/LayananHilti';
import SocialButtons from './components/SocialButtons';
import ReactPixel from 'react-facebook-pixel';


function App() {
  useEffect(() => {
    const options = {
      autoConfig: true,
      debug: false,
    };

    ReactPixel.init('YOUR_PIXEL_ID', undefined, options); // 'undefined' gantiin null di TS
    ReactPixel.pageView(); // Track page view
  }, []);

  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/layanan-hilti" element={<LayananHilti />} />
        </Routes>
        <SocialButtons />
      </div>
    </Router>
  );
}

export default App;