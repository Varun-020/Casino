import React from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

function AgentRoutes({ children }) {
    const { user } = useSelector((state) => state.AuthReducer);

    if (!user) {
        return <Navigate to="/agent/login" replace />
    }
    if (user && user?.userType === 'agent') {
        return children
    }

    return null
}

export default AgentRoutes;