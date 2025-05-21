import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import { FaUsers } from 'react-icons/fa';
import { FaBoxes } from 'react-icons/fa';
import { FaCogs } from 'react-icons/fa';
import { FaCalendarAlt } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaWarehouse } from 'react-icons/fa';

const Dashboard = () => {
  const navigate = useNavigate();
  
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard Screen</h1>
      <p className="dashboard-subtitle">Quick business overview with KPIs and graphs</p>
      <button 
        className="main-action-button" 
        onClick={() => navigate('/dashboard-details')}
      >
        View Details
      </button>      {/* Summary Cards */}
      <div className="dashboard-cards">
        <div className="card clickable" onClick={() => navigate('/hr')}>
          <span className="card-icon"><FaUsers color="#00cec9" /></span>
          <div className="card-content">
            <h3>Total Employees</h3>
            <p>150</p>
          </div>
        </div>
        <div className="card clickable" onClick={() => navigate('/inventory')}>
          <span className="card-icon"><FaBoxes color="#0984e3" /></span>
          <div className="card-content">
            <h3>Total Products</h3>
            <p>500</p>
          </div>
        </div>
        <div className="card clickable" onClick={() => navigate('/machine-status')}>
          <span className="card-icon"><FaCogs color="#6c5ce7" /></span>
          <div className="card-content">
            <h3>Active Machines</h3>
            <p>20</p>
          </div>
        </div>
        <div className="card clickable" onClick={() => navigate('/manage-shifts')}>
          <span className="card-icon"><FaCalendarAlt color="#e84393" /></span>
          <div className="card-content">
            <h3>Upcoming Shifts</h3>
            <p>4</p>
          </div>
        </div>
      </div>      {/* Charts Section */}
      <h2 className="dashboard-section-title">Dashboard Data</h2>
      <div className="dashboard-charts">
        <div className="chart clickable" onClick={() => navigate('/production')}>
          <div className="chart-icon"><FaChartLine color="#00cec9" /></div>
          <h3>Production Rate</h3>
          <p>(Graph Placeholder)</p>
        </div>
        <div className="chart clickable" onClick={() => navigate('/inventory')}>
          <div className="chart-icon"><FaWarehouse color="#0984e3" /></div>
          <h3>Inventory Value</h3>
          <p>(Graph Placeholder)</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;