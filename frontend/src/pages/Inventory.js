import React from 'react';
import './Inventory.css';

const Inventory = () => {
  return (
    <div className="inventory-container">
      <h1>Inventory Management</h1>
      <p>Manage stock levels, vendors, and supply chain</p>
      <button className="inventory-button">View Low Stock Alerts</button>
      <button className="inventory-button">Add Item</button>

      {/* Inventory List */}
      <div className="inventory-section">
        <div className="inventory-card">Widget A - 50 items</div>
        <div className="inventory-card">Gadget B - 30 items</div>
      </div>
    </div>
  );
};

export default Inventory;
