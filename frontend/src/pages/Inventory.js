import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaBox } from 'react-icons/fa';
import './Inventory.css';

const Inventory = () => {
  const navigate = useNavigate();
  
  return (
    <div className="inventory-container">
      <h1 className="inventory-title">Inventory Management</h1>
      <p className="inventory-subtitle">Manage stock levels, vendors, and supply chain</p>
      <div className="inventory-actions">
        <button 
          className="inventory-button" 
          onClick={() => navigate('/low-stock-alerts')}
        >
          View Low Stock Alerts
        </button>
        <button 
          className="inventory-button" 
          onClick={() => navigate('/add-item')}
        >
          Add Item
        </button>
      </div>

      {/* Inventory List */}
      <h2 className="inventory-section-title">Inventory Overview</h2>      <div className="inventory-section">
        <div className="inventory-card">
          <span className="inventory-icon"><FaBox color="#0984e3" /></span>
          <div className="inventory-details">
            <p className="inventory-item-name">Widget A</p>
            <p className="inventory-item-quantity">50 items</p>
          </div>
        </div>
        <div className="inventory-card">
          <span className="inventory-icon"><FaBox color="#0984e3" /></span>
          <div className="inventory-details">
            <p className="inventory-item-name">Gadget B</p>
            <p className="inventory-item-quantity">30 items</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inventory;