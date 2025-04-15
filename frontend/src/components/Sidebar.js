import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();

  return (
    <div className="sidebar">
      <h2>MEMS ERP</h2>
      <nav>
        <Link
          to="/dashboard"
          className={location.pathname === '/dashboard' ? 'active' : ''}
        >
          Dashboard
        </Link>
        <Link
          to="/hr"
          className={location.pathname === '/hr' ? 'active' : ''}
        >
          HR Management
        </Link>
        <Link
          to="/inventory"
          className={location.pathname === '/inventory' ? 'active' : ''}
        >
          Inventory Management
        </Link>
        <Link
          to="/production"
          className={location.pathname === '/production' ? 'active' : ''}
        >
          Production Monitoring
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;