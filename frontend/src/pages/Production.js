import React from 'react';
import './Production.css';

const Production = () => {
  return (
    <div className="production-container">
      <h1 className="production-title">Production Monitoring</h1>
      <p className="production-subtitle">Track machine performance and production output</p>
      <div className="production-actions">
        <button className="production-button">View Machine Status</button>
        <button className="production-button">Add Production Task</button>
      </div>

      {/* Machine Overview */}
      <h2 className="production-section-title">Machine Overview</h2>
      <div className="machine-section">
        <div className="machine-card">
          <span className="machine-icon">⚙️</span>
          <div className="machine-details">
            <p className="machine-name">Machine A</p>
            <p className="machine-status">Status: Running</p>
          </div>
        </div>
        <div className="machine-card">
          <span className="machine-icon">⚙️</span>
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