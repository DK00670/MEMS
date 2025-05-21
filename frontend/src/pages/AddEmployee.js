import React, { useState } from 'react';
import './HR.css';

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    department: '',
    startDate: '',
    shift: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // This would connect to your API to add the employee
    alert('Employee added successfully!');
    console.log('Form submitted:', formData);
    
    // Reset form after submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      position: '',
      department: '',
      startDate: '',
      shift: ''
    });
  };

  return (
    <div className="hr-container">
      <h1 className="hr-title">Add New Employee</h1>
      <p className="hr-subtitle">Create profile for a new team member</p>
      
      <div className="employee-form-container">
        <form onSubmit={handleSubmit} className="employee-form">
          <div className="form-row">
            <div className="form-group">
              <label>First Name</label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Position</label>
              <input
                type="text"
                name="position"
                value={formData.position}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Department</label>
              <select
                name="department"
                value={formData.department}
                onChange={handleChange}
                required
              >
                <option value="">Select Department</option>
                <option value="production">Production</option>
                <option value="quality">Quality Control</option>
                <option value="maintenance">Maintenance</option>
                <option value="engineering">Engineering</option>
                <option value="administration">Administration</option>
              </select>
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-group">
              <label>Start Date</label>
              <input
                type="date"
                name="startDate"
                value={formData.startDate}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Shift</label>
              <select
                name="shift"
                value={formData.shift}
                onChange={handleChange}
                required
              >
                <option value="">Select Shift</option>
                <option value="morning">Morning Shift (06:00-14:00)</option>
                <option value="afternoon">Afternoon Shift (14:00-22:00)</option>
                <option value="night">Night Shift (22:00-06:00)</option>
              </select>
            </div>
          </div>
          
          <div className="form-actions">
            <button type="submit" className="hr-button">Add Employee</button>
            <button type="button" className="hr-button secondary">Cancel</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
