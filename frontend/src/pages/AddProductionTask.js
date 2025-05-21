import React, { useState } from 'react';
import './Production.css';

const AddProductionTask = () => {
  const [formData, setFormData] = useState({
    taskName: '',
    machine: '',
    operator: '',
    productCode: '',
    quantity: '',
    startDate: '',
    endDate: '',
    priority: 'medium',
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
    // This would connect to your API to add the production task
    alert('Production task added successfully!');
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      taskName: '',
      machine: '',
      operator: '',
      productCode: '',
      quantity: '',
      startDate: '',
      endDate: '',
      priority: 'medium',
      description: ''
    });
  };

  return (
    <div className="production-container">
      <h1 className="production-title">Add Production Task</h1>
      <p className="production-subtitle">Schedule new manufacturing tasks</p>
      
      <div className="production-form-container">
        <form onSubmit={handleSubmit} className="production-form">
          <div className="form-row">
            <div className="form-group">
              <label>Task Name</label>
              <input
                type="text"
                name="taskName"
                value={formData.taskName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Machine</label>
              <select
                name="machine"
                value={formData.machine}
                onChange={handleChange}
                required
              >
                <option value="">Select Machine</option>
                <option value="machineA">Machine A</option>
                <option value="machineB">Machine B</option>
                <option value="machineC">Machine C</option>
                <option value="machineD">Machine D</option>
                <option value="machineE">Machine E</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Operator</label>
              <select
                name="operator"
                value={formData.operator}
                onChange={handleChange}
                required
              >
                <option value="">Select Operator</option>
                <option value="johnSmith">John Smith</option>
                <option value="janeDoe">Jane Doe</option>
                <option value="bobJohnson">Bob Johnson</option>
                <option value="aliceBrown">Alice Brown</option>
                <option value="davidWilson">David Wilson</option>
              </select>
            </div>
            <div className="form-group">
              <label>Product Code</label>
              <input
                type="text"
                name="productCode"
                value={formData.productCode}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                min="1"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Priority</label>
              <select
                name="priority"
                value={formData.priority}
                onChange={handleChange}
                required
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="datetime-local"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>End Date</label>
              <input
                type="datetime-local"
                name="endDate"
                value={formData.endDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row full-width">
            <div className="form-group">
              <label>Task Description</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
              />
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="production-button">Add Task</button>
            <button type="button" className="production-button secondary">Cancel</button>
          </div>
        </form>
      </div>
      
      <div className="production-schedule">
        <h3>Current Production Schedule</h3>
        <p>(Production timeline would appear here)</p>
      </div>
    </div>
  );
};

export default AddProductionTask;
