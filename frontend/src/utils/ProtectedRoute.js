import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const ProtectedRoute = ({ children, requiredRole }) => {
  const { user, loading } = useAuth();
  
  // Show nothing while loading
  if (loading) {
    return null;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  // If a specific role is required but user doesn't have it
  if (requiredRole && user.roleId !== requiredRole) {
    // Regular users trying to access admin pages go to their dashboard
    if (user.roleId === 2) {
      return <Navigate to="/dashboard" replace />;
    }
    // Admins trying to access user pages go to admin dashboard
    return <Navigate to="/admin/dashboard" replace />;
  }
  
  return children;
};

export default ProtectedRoute;