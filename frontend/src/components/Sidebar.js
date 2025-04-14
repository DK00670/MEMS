import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>MEMS ERP</h2>
      <nav>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/hr">HR Management</Link>
        <Link to="/inventory">Inventory Management</Link>
        <Link to="/production">Production Monitoring</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
