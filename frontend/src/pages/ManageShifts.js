import React, { useState } from 'react';
import './HR.css';

const ManageShifts = () => {
  const [shifts, setShifts] = useState([
    { id: 1, name: 'Morning Shift', startTime: '06:00', endTime: '14:00', employees: ['Alice', 'Eve', 'John'] },
    { id: 2, name: 'Afternoon Shift', startTime: '14:00', endTime: '22:00', employees: ['Bob', 'Charlie'] },
    { id: 3, name: 'Night Shift', startTime: '22:00', endTime: '06:00', employees: ['David', 'Frank'] }
  ]);

  return (
    <div className="hr-container">
      <h1 className="hr-title">Shift Management</h1>
      <p className="hr-subtitle">Configure and schedule employee shifts</p>
      
      <div className="shifts-container">
        <div className="shifts-header">
          <h3>Current Shifts</h3>
          <button className="hr-button">Add New Shift</button>
        </div>
        
        <div className="shifts-list">
          {shifts.map(shift => (
            <div key={shift.id} className="shift-card">
              <h3>{shift.name}</h3>
              <div className="shift-details">
                <p><strong>Time:</strong> {shift.startTime} - {shift.endTime}</p>
                <p><strong>Employees:</strong> {shift.employees.join(', ')}</p>
              </div>
              <div className="shift-actions">
                <button className="hr-action-button">Edit</button>
                <button className="hr-action-button">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="shifts-calendar">
        <h3>Shift Schedule</h3>
        <p>(Calendar view would appear here)</p>
      </div>
    </div>
  );
};

export default ManageShifts;
