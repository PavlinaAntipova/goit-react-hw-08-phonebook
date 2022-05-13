import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


export default function PublicRoute({
  children,
  restricted = false,
  redirectTo = '/',
}) {
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const shouldRedirect = isLoggedIn && restricted;
    

  if (shouldRedirect) {
      return <Navigate to={redirectTo} replace />
  }
    return children;

}