import React from 'react';
import './HR.css';

const HR = () => {
  return (
    <div className="hr-container">
      <h1 className="hr-title">HR Management</h1>
      <p className="hr-subtitle">Manage employees, shifts, and payroll data</p>
      <div className="hr-actions">
        <button className="hr-button">Manage Shifts</button>
        <button className="hr-button">Add Employee</button>
      </div>

      {/* Employee Cards */}
      <h2 className="hr-section-title">Employee Overview</h2>
      <div className="employee-section">
        <div className="employee-card">
          <span className="employee-icon">👨‍💼</span>
          <div className="employee-details">
            <p className="employee-name">Alice</p>
            <p className="employee-shift">Shift 1</p>
          </div>
        </div>
        <div className="employee-card">
          <span className="employee-icon">👨‍💼</span>
          <div className="employee-details">
            <p className="employee-name">Bob</p>
            <p className="employee-shift">Shift 2</p>
          </div>
        </div>
        <div className="employee-card">
          <span className="employee-icon">👩‍💼</span>
          <div className="employee-details">
            <p className="employee-name">Eve</p>
            <p className="employee-shift">Shift 1</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HR;