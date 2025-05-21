import React, { useState } from 'react';
import './Inventory.css';

const AddItem = () => {
  const [formData, setFormData] = useState({
    itemName: '',
    itemCode: '',
    category: '',
    quantity: '',
    unitPrice: '',
    supplier: '',
    reorderThreshold: '',
    location: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would connect to your API to add the inventory item
    alert('Item added successfully!');
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      itemName: '',
      itemCode: '',
      category: '',
      quantity: '',
      unitPrice: '',
      supplier: '',
      reorderThreshold: '',
      location: '',
      description: ''
    });
  };

  return (
    <div className="inventory-container">
      <h1 className="inventory-title">Add Inventory Item</h1>
      <p className="inventory-subtitle">Add new items to your inventory management system</p>
      
      <div className="inventory-form-container">
        <form onSubmit={handleSubmit} className="inventory-form">
          <div className="form-row">
            <div className="form-group">
              <label>Item Name</label>
              <input
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Item Code/SKU</label>
              <input
                type="text"
                name="itemCode"
                value={formData.itemCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Category</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
              >
                <option value="">Select Category</option>
                <option value="rawMaterials">Raw Materials</option>
                <option value="components">Components</option>
                <option value="finishedGoods">Finished Goods</option>
                <option value="tools">Tools & Equipment</option>
                <option value="packaging">Packaging Materials</option>
              </select>
            </div>
            <div className="form-group">
              <label>Initial Quantity</label>
              <input
                type="number"
                name="quantity"
                min="0"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Unit Price ($)</label>
              <input
                type="number"
                name="unitPrice"
                min="0"
                step="0.01"
                value={formData.unitPrice}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Supplier</label>
              <input
                type="text"
                name="supplier"
                value={formData.supplier}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Reorder Threshold</label>
              <input
                type="number"
                name="reorderThreshold"
                min="0"
                value={formData.reorderThreshold}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Storage Location</label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row full-width">
            <div className="form-group">
              <label>Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="inventory-button">Add Item</button>
            <button type="button" className="inventory-button secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
