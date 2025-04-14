import React from 'react';
import './HR.css';

const HR = () => {
  return (
    <div className="hr-container">
      <h1>HR Management</h1>
      <p>Manage employees, shifts, and payroll data</p>
      <button className="hr-button">Manage Shifts</button>
      <button className="hr-button">Add Employee</button>

      {/* Employee Cards */}
      <div className="employee-section">
        <div className="employee-card">
          <span>👨‍💼</span> <p>Alice</p> <p>Shift 1</p>
        </div>
        <div className="employee-card">
          <span>👨‍💼</span> <p>Bob</p> <p>Shift 2</p>
        </div>
        <div className="employee-card">
          <span>👩‍💼</span> <p>Eve</p> <p>Shift 1</p>
        </div>
      </div>
    </div>
  );
};

export default HR;
