import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Navigate } from 'react-router-dom';

const UserRoutes = ({ children }) => {
    const { user } = useSelector(state => state.AuthReducer);

    return user && user?.userType === 'user' ? children :
        <Navigate to="/login" />
};

export default UserRoutes;
