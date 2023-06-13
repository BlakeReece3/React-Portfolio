import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';
import Contact from './components/contact/Contact';
import Resume from './components/resume/Resume';

const App = () => {
  return (
    <Router>
      <div>
        <div className="mobile-header">
          <Header />
        </div>
        <div>
          <Navigation />
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/" element={<About />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;

