import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isAuthenticated } from 'redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
    const isLoggedIn = useSelector(isAuthenticated);

    if (!isLoggedIn) {
        return <Navigate to="/login" replace={true} />;
    }
    return children;
}