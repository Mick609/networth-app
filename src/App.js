// src/App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import MainPage from './pages/MainPage';
import StockPage from './pages/StockPage';
import PropertyPage from './pages/PropertyPage';
import './App.css'; // Make sure to include your CSS file

const App = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);

  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };

  return (
    <Router>
      <div className="app">
        <button onClick={toggleSidebar} className="toggle-button">
          {isSidebarVisible ? 'Hide Sidebar' : 'Show Sidebar'}
        </button>
        <div className={`layout ${isSidebarVisible ? 'sidebar-visible' : 'sidebar-hidden'}`}>
          {isSidebarVisible && <Sidebar />}
          <div className="content">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/stock" element={<StockPage />} />
              <Route path="/property" element={<PropertyPage />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
