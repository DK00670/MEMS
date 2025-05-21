import React from 'react';
import './Inventory.css';

const LowStockAlerts = () => {
  // Sample data for low stock items
  const lowStockItems = [
    { id: 1, name: 'Widget A', currentStock: 10, threshold: 20, supplier: 'Acme Inc', lastOrdered: '2023-04-15' },
    { id: 2, name: 'Component B', currentStock: 5, threshold: 15, supplier: 'Tech Parts Ltd', lastOrdered: '2023-04-22' },
    { id: 3, name: 'Material C', currentStock: 8, threshold: 25, supplier: 'Raw Materials Co', lastOrdered: '2023-04-10' },
    { id: 4, name: 'Tool D', currentStock: 2, threshold: 10, supplier: 'Industrial Tools Inc', lastOrdered: '2023-04-05' }
  ];

  return (
    <div className="inventory-container">
      <h1 className="inventory-title">Low Stock Alerts</h1>
      <p className="inventory-subtitle">Items that need to be reordered soon</p>
      
      <div className="inventory-actions">
        <button className="inventory-button">Reorder All Items</button>
        <button className="inventory-button">Export Report</button>
      </div>
      
      <div className="low-stock-container">
        <div className="low-stock-header">
          <span className="header-item">Item Name</span>
          <span className="header-item">Current Stock</span>
          <span className="header-item">Threshold</span>
          <span className="header-item">Supplier</span>
          <span className="header-item">Last Ordered</span>
          <span className="header-item">Actions</span>
        </div>
        
        {lowStockItems.map(item => (
          <div key={item.id} className="low-stock-item">
            <span className="item-name">{item.name}</span>
            <span className={`item-stock ${item.currentStock <= 5 ? 'critical' : 'warning'}`}>
              {item.currentStock}
            </span>
            <span className="item-threshold">{item.threshold}</span>
            <span className="item-supplier">{item.supplier}</span>
            <span className="item-last-ordered">{item.lastOrdered}</span>
            <span className="item-actions">
              <button className="action-button">Reorder</button>
            </span>
          </div>
        ))}
      </div>
      
      <div className="inventory-charts">
        <div className="chart">
          <h3>Stock Level Trends</h3>
          <p>(Stock level trend graph would appear here)</p>
        </div>
      </div>
    </div>
  );
};

export default LowStockAlerts;
