import "./App.css";
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

const App = () => {
  const [currentTab, setCurrentTab] = useState('about');

  // Mapping of tab names to their corresponding components
  const tabComponents = {
    about: <About />,
    portfolio: <Portfolio />,
    contact: <Contact />,
    resume: <Resume />,
  };

  // This function generates the tab component based on the currentTab value
  const renderTab = () => {
    return tabComponents[currentTab] || null;
  };

  return (
    <div>
      <div className="mobile-header">
        <Header currentTab={currentTab} setCurrentTab={setCurrentTab} />
      </div>
      <div>
        <main>{renderTab()}</main>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;