import useCookies from 'react-cookie/cjs/useCookies';
import Button from 'react-bootstrap/Button';
import { useAuthStore } from 'store/store.js';

const LogoutBtn = () => {
  const [cookies, removeCookies] = useCookies(['refresh_token']);
  const setStoreToken = useAuthStore((state) => state.setToken);

  // 로컬스토리지에 토큰이 있을 때 지우기
  // const handleLogout = () => {
  //   localStorage.removeItem('access_token');
  // };

  const handleLogout = () => {
    // 쿠키에 저장된 refresh 토큰 삭제
    removeCookies('refresh_token');
    // local storage, 전역 State에 저장된 access 토큰 삭제
    localStorage.removeItem('access_token');
    setStoreToken(null);
  };

  return (
    <Button variant="secondary" size="sm" onClick={handleLogout}>
      로그아웃
    </Button>
  );
};

export default LogoutBtn;
