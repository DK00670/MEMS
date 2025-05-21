import React from 'react';
import './Dashboard.css';
import { FaMoneyBillWave } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa';
import { FaClock } from 'react-icons/fa';
import { FaExclamationTriangle } from 'react-icons/fa';

const DashboardDetails = () => {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Dashboard Details</h1>
      <p className="dashboard-subtitle">Detailed metrics and performance indicators</p>
      
      <div className="dashboard-section">
        <h2 className="dashboard-section-title">Performance Metrics</h2>
        <div className="dashboard-charts">
          <div className="chart">
            <h3>Production Efficiency</h3>
            <p>(Detailed efficiency graph would appear here)</p>
            <div className="chart-details">
              <p><strong>Current efficiency:</strong> 85%</p>
              <p><strong>Target efficiency:</strong> 90%</p>
              <p><strong>Historical average:</strong> 82%</p>
            </div>
          </div>
          <div className="chart">
            <h3>Resource Utilization</h3>
            <p>(Resource utilization graph would appear here)</p>
            <div className="chart-details">
              <p><strong>Machine utilization:</strong> 78%</p>
              <p><strong>Labor utilization:</strong> 92%</p>
              <p><strong>Material efficiency:</strong> 94%</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="dashboard-section">
        <h2 className="dashboard-section-title">Business KPIs</h2>        <div className="dashboard-cards">
          <div className="card">
            <span className="card-icon"><FaMoneyBillWave color="#00b894" /></span>
            <div className="card-content">
              <h3>Revenue MTD</h3>
              <p>$157,500</p>
            </div>
          </div>
          <div className="card">
            <span className="card-icon"><FaChartLine color="#0984e3" /></span>
            <div className="card-content">
              <h3>Growth Rate</h3>
              <p>12.3%</p>
            </div>
          </div>
          <div className="card">
            <span className="card-icon"><FaClock color="#6c5ce7" /></span>
            <div className="card-content">
              <h3>Avg. Production Time</h3>
              <p>4.2 hours</p>
            </div>
          </div>
          <div className="card">
            <span className="card-icon"><FaExclamationTriangle color="#e17055" /></span>
            <div className="card-content">
              <h3>Quality Issues</h3>
              <p>2.1%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardDetails;
