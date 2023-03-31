import { Navigate, useLocation, Outlet } from 'react-router-dom';
import { useAuthStore } from 'store/store.js';

const RequireRole = () => {
  const { role } = useAuthStore();
  const location = useLocation();

  return role === 'ADMIN' ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireRole;
