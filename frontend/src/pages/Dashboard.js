import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard Screen</h1>
      <p className="dashboard-subtitle">Quick business overview with KPIs and graphs</p>
      <button className="main-action-button">View Details</button>

      {/* Summary Cards */}
      <div className="dashboard-cards">
        <div className="card">
          <span className="card-icon">👥</span>
          <div className="card-content">
            <h3>Total Employees</h3>
            <p>150</p>
          </div>
        </div>
        <div className="card">
          <span className="card-icon">📦</span>
          <div className="card-content">
            <h3>Total Products</h3>
            <p>500</p>
          </div>
        </div>
        <div className="card">
          <span className="card-icon">⚙️</span>
          <div className="card-content">
            <h3>Active Machines</h3>
            <p>20</p>
          </div>
        </div>
        <div className="card">
          <span className="card-icon">📅</span>
          <div className="card-content">
            <h3>Upcoming Shifts</h3>
            <p>4</p>
          </div>
        </div>
      </div>

      {/* Charts Section */}
      <h2 className="dashboard-section-title">Dashboard Data</h2>
      <div className="dashboard-charts">
        <div className="chart">
          <h3>Production Rate</h3>
          <p>(Graph Placeholder)</p>
        </div>
        <div className="chart">
          <h3>Inventory Value</h3>
          <p>(Graph Placeholder)</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;