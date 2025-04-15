import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import HR from './pages/HR';
import Inventory from './pages/Inventory';
import Production from './pages/Production';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/hr" element={<HR />} />
            <Route path="/inventory" element={<Inventory />} />
            <Route path="/production" element={<Production />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;