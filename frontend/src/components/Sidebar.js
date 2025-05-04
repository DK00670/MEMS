import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthService from '../services/auth';
import './Sidebar.css';

const Sidebar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoggedIn = AuthService.isAuthenticated();

  const handleLogout = () => {
    AuthService.logout();
    navigate('/login');
  };

  return (
    <div className="sidebar">
      <h2>MEMS ERP</h2>
      <nav>
        {isLoggedIn ? (
          <>
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
            <button
              className="logout-button"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className={location.pathname === '/login' ? 'active' : ''}
            >
              Login
            </Link>
            <Link
              to="/signup"
              className={location.pathname === '/signup' ? 'active' : ''}
            >
              Sign Up
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Sidebar;

