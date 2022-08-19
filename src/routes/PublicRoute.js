import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { isAuthenticated } from 'redux/auth/auth-selectors';



export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(isAuthenticated);
  const shouldNavigate = isLoggedIn && restricted;

  if (shouldNavigate) {
    return <Navigate to="/contacts" replace={true} />;
  }
  
  return children;
}