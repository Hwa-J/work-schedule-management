import { Navigate, useLocation, Outlet } from 'react-router-dom';
import useLoggedUserStore from 'store/useLoggedUserStore';

const RequireRole = () => {
  const { role } = useLoggedUserStore();
  const location = useLocation();

  return role === 'ADMIN' ? (
    <Outlet />
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default RequireRole;
