// src/components/ProtectedRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, role = 'any' }) => {
  // Check for any authentication token
  const adminToken = localStorage.getItem('adminToken');
  const clientToken = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  
  const isAuthenticated = adminToken || clientToken;
  
  if (!isAuthenticated) {
    console.log('No token found, redirecting to login');
    return <Navigate to="/login" replace />;
  }

  // Role-based protection
  if (role !== 'any') {
    if (role === 'admin' && !adminToken) {
      console.log('Admin access required, redirecting to login');
      return <Navigate to="/login" replace />;
    }
    if (role === 'client' && !clientToken) {
      console.log('Client access required, redirecting to client login');
      return <Navigate to="/client-login" replace />;
    }
  }
  
  return children;
};

export default ProtectedRoute;