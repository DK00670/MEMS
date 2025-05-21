import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import DashboardDetails from './pages/DashboardDetails';
import HR from './pages/HR';
import ManageShifts from './pages/ManageShifts';
import AddEmployee from './pages/AddEmployee';
import Inventory from './pages/Inventory';
import LowStockAlerts from './pages/LowStockAlerts';
import AddItem from './pages/AddItem';
import Production from './pages/Production';
import MachineStatus from './pages/MachineStatus';
import AddProductionTask from './pages/AddProductionTask';
import Signup from './pages/Signup';
import './App.css';
import Login from './pages/Login';
import PrivateRoute from './components/PrivateRoute';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            } />
            <Route path="/hr" element={
              <PrivateRoute>
                <HR />
              </PrivateRoute>
            } />
            <Route path="/inventory" element={
              <PrivateRoute>
                <Inventory />
              </PrivateRoute>
            } />            <Route path="/production" element={
              <PrivateRoute>
                <Production />
              </PrivateRoute>
            } />
            <Route path="/dashboard-details" element={
              <PrivateRoute>
                <DashboardDetails />
              </PrivateRoute>
            } />
            <Route path="/manage-shifts" element={
              <PrivateRoute>
                <ManageShifts />
              </PrivateRoute>
            } />
            <Route path="/add-employee" element={
              <PrivateRoute>
                <AddEmployee />
              </PrivateRoute>
            } />
            <Route path="/low-stock-alerts" element={
              <PrivateRoute>
                <LowStockAlerts />
              </PrivateRoute>
            } />
            <Route path="/add-item" element={
              <PrivateRoute>
                <AddItem />
              </PrivateRoute>
            } />
            <Route path="/machine-status" element={
              <PrivateRoute>
                <MachineStatus />
              </PrivateRoute>
            } />
            <Route path="/add-production-task" element={
              <PrivateRoute>
                <AddProductionTask />
              </PrivateRoute>
            } />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;