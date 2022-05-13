import { useSelector } from 'react-redux';
import {Navigate } from 'react-router-dom';

export default function PrivateRoute({
  children,
  redirectTo = '/',
}) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    if (isLoggedIn) {
        return children; 
  }
    return <Navigate to={redirectTo} replace />;
}


