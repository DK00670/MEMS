import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import HR from './pages/HR';
import Inventory from './pages/Inventory';
import Production from './pages/Production';
import Signup from './pages/Signup';
import './App.css';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/hr" element={
              <PrivateRoute>
                <HR />
              </PrivateRoute>
            } />
            <Route path="/inventory" element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            } />
            <Route path="/production" element={
              <PrivateRoute>
                <Production />
              </PrivateRoute>
            } />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;