import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCog } from 'react-icons/fa';
import './Production.css';

const Production = () => {
  const navigate = useNavigate();
  
  return (
    <div className="production-container">
      <h1 className="production-title">Production Monitoring</h1>
      <p className="production-subtitle">Track machine performance and production output</p>
      <div className="production-actions">
        <button 
          className="production-button" 
          onClick={() => navigate('/machine-status')}
        >
          View Machine Status
        </button>
        <button 
          className="production-button" 
          onClick={() => navigate('/add-production-task')}
        >
          Add Production Task
        </button>
      </div>

      {/* Machine Overview */}
      <h2 className="production-section-title">Machine Overview</h2>      <div className="machine-section">
        <div className="machine-card">
          <span className="machine-icon"><FaCog color="#6c5ce7" /></span>
          <div className="machine-details">
            <p className="machine-name">Machine A</p>
            <p className="machine-status">Status: Running</p>
          </div>
        </div>
        <div className="machine-card">
          <span className="machine-icon"><FaCog color="#6c5ce7" /></span>
          <div className="machine-details">
            <p className="machine-name">Machine B</p>
            <p className="machine-status">Status: Maintenance</p>
          </div>
        </div>
        <div className="machine-card">
          <span className="machine-icon">⚙️</span>
          <div className="machine-details">
            <p className="machine-name">Machine C</p>
            <p className="machine-status">Status: Idle</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Production;