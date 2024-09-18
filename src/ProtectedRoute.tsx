// ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { GetUser } from './redux/UserSlice';
import { UserModel } from './models/UserModel';

interface ProtectedRouteProps {
  children: JSX.Element;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const user = useSelector(GetUser) as UserModel | null;
  
  if (!user) {
    // Redirect to home page if not authenticated
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
