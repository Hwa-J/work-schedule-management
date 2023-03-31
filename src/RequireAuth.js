import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useAuthStore from 'store/useAuthStore';

const RequireAuth = () => {
  const { token } = useAuthStore();
  const location = useLocation();

  return token ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireAuth;
