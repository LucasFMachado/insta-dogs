import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { UserContext } from '../../../contexts/UserContext';
import Loading from '../Loading';

const ProtectedRoute = ({children}) => {
  const { login, loading } = useContext(UserContext)

  if (loading) {
    return <Loading />
  }

  return login
    ? children
    : <Navigate to="/login" />
}

export default ProtectedRoute;