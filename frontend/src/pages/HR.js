import React from 'react';
import { useNavigate } from 'react-router-dom';
import './HR.css';
import { FaUserTie } from 'react-icons/fa';
import { FaUserAlt } from 'react-icons/fa';

const HR = () => {
  const navigate = useNavigate();
  
  return (
    <div className="hr-container">
      <h1 className="hr-title">HR Management</h1>
      <p className="hr-subtitle">Manage employees, shifts, and payroll data</p>
      <div className="hr-actions">
        <button 
          className="hr-button" 
          onClick={() => navigate('/manage-shifts')}
        >
          Manage Shifts
        </button>
        <button 
          className="hr-button" 
          onClick={() => navigate('/add-employee')}
        >
          Add Employee
        </button>
      </div>

      {/* Employee Cards */}
      <h2 className="hr-section-title">Employee Overview</h2>
      <div className="employee-section">        <div className="employee-card">
          <span className="employee-icon"><FaUserTie color="#00cec9" /></span>
          <div className="employee-details">
            <p className="employee-name">Alice</p>
            <p className="employee-shift">Shift 1</p>
          </div>
        </div>
        <div className="employee-card">
          <span className="employee-icon"><FaUserTie color="#0984e3" /></span>
          <div className="employee-details">
            <p className="employee-name">Bob</p>
            <p className="employee-shift">Shift 2</p>
          </div>
        </div>
        <div className="employee-card">
          <span className="employee-icon"><FaUserAlt color="#e84393" /></span>
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