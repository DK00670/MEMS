import React, { useState } from 'react';
import './Production.css';

const MachineStatus = () => {
  const [machines, setMachines] = useState([
    { id: 1, name: 'Machine A', status: 'Running', uptime: '98.7%', maintenance: '2023-06-15', operator: 'John Smith' },
    { id: 2, name: 'Machine B', status: 'Maintenance', uptime: '85.2%', maintenance: '2023-05-10', operator: 'Jane Doe' },
    { id: 3, name: 'Machine C', status: 'Idle', uptime: '92.5%', maintenance: '2023-06-01', operator: 'Bob Johnson' },
    { id: 4, name: 'Machine D', status: 'Running', uptime: '97.1%', maintenance: '2023-07-01', operator: 'Alice Brown' },
    { id: 5, name: 'Machine E', status: 'Error', uptime: '78.9%', maintenance: '2023-05-20', operator: 'David Wilson' }
  ]);

  const getStatusColor = (status) => {
    switch(status.toLowerCase()) {
      case 'running': return 'status-running';
      case 'maintenance': return 'status-maintenance';
      case 'idle': return 'status-idle';
      case 'error': return 'status-error';
      default: return '';
    }
  };

  return (
    <div className="production-container">
      <h1 className="production-title">Machine Status Dashboard</h1>
      <p className="production-subtitle">Real-time monitoring of production equipment</p>
      
      <div className="production-actions">
        <button className="production-button">Refresh Status</button>
        <button className="production-button">Schedule Maintenance</button>
      </div>
      
      <div className="machine-status-overview">
        <div className="status-summary">
          <div className="status-card">
            <h3>Active Machines</h3>
            <p className="status-count">{machines.filter(m => m.status === 'Running').length}</p>
          </div>
          <div className="status-card">
            <h3>Idle Machines</h3>
            <p className="status-count">{machines.filter(m => m.status === 'Idle').length}</p>
          </div>
          <div className="status-card">
            <h3>Maintenance</h3>
            <p className="status-count">{machines.filter(m => m.status === 'Maintenance').length}</p>
          </div>
          <div className="status-card">
            <h3>Errors</h3>
            <p className="status-count">{machines.filter(m => m.status === 'Error').length}</p>
          </div>
        </div>
      </div>
      
      <div className="machine-status-list">
        <div className="status-header">
          <span className="header-item">Machine Name</span>
          <span className="header-item">Status</span>
          <span className="header-item">Uptime</span>
          <span className="header-item">Next Maintenance</span>
          <span className="header-item">Operator</span>
          <span className="header-item">Actions</span>
        </div>
        
        {machines.map(machine => (
          <div key={machine.id} className="status-item">
            <span className="item-name">{machine.name}</span>
            <span className={`item-status ${getStatusColor(machine.status)}`}>
              {machine.status}
            </span>
            <span className="item-uptime">{machine.uptime}</span>
            <span className="item-maintenance">{machine.maintenance}</span>
            <span className="item-operator">{machine.operator}</span>
            <span className="item-actions">
              <button className="action-button">Details</button>
              <button className="action-button">Control</button>
            </span>
          </div>
        ))}
      </div>
      
      <div className="production-charts">
        <div className="chart">
          <h3>Machine Efficiency Trends</h3>
          <p>(Machine efficiency graph would appear here)</p>
        </div>
      </div>
    </div>
  );
};

export default MachineStatus;
