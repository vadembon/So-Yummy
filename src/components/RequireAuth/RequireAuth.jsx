import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../auth';

export const RequireAuth = ({
  children,
}) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth.token) {
    return <Navigate to="/welcome" state={{ path: location.pathname }} />
  }

  return children;
};
