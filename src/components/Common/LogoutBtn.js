import useCookies from 'react-cookie/cjs/useCookies';
import Button from 'react-bootstrap/Button';
import useAuthStore from 'store/useAuthStore';
import useLoggedUserStore from 'store/useLoggedUserStore';

const LogoutBtn = () => {
  const [cookies, removeCookies] = useCookies(['refresh_token']);
  const setStoreToken = useAuthStore((state) => state.setToken);
  const setId = useLoggedUserStore((state) => state.setId);
  const setUsername = useLoggedUserStore((state) => state.setUsername);
  const setName = useLoggedUserStore((state) => state.setName);
  const setEmail = useLoggedUserStore((state) => state.setEmail);
  const setRole = useLoggedUserStore((state) => state.setRole);

  // 로컬스토리지에 토큰이 있을 때 지우기
  // const handleLogout = () => {
  //   localStorage.removeItem('access_token');
  // };

  const handleLogout = () => {
    // 쿠키에 저장된 refresh 토큰 삭제
    removeCookies('refresh_token');
    // 전역 State에 저장된 access 토큰 및 유저 정보 삭제
    setStoreToken(null);
    setId(null);
    setUsername(null);
    setName(null);
    setEmail(null);
    setRole(null);
    // 로컬 스토리지에 저장된 access 토큰 및 유저 정보 삭제
    localStorage.removeItem('access_token');
    localStorage.removeItem('user_data');
  };

  return (
    <Button variant="secondary" size="sm" onClick={handleLogout}>
      로그아웃
    </Button>
  );
};

export default LogoutBtn;
