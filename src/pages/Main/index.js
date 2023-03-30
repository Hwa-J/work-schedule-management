import useCookies from 'react-cookie/cjs/useCookies';
import Button from 'react-bootstrap/Button';
import { useAuthStore } from 'store/store.js';
import { Link } from 'react-router-dom';
import { MainCalendar } from 'components/Main/MainCalendar';
import { AddEventNomalModal } from 'components/Modals/AddEventNomalModal';
import { DeleteEventModal } from 'components/Modals/DeleteEventModal';

const Main = () => {
  const [cookies, setCookies, removeCookies] = useCookies(['access_token']);
  const setStoreToken = useAuthStore((state) => state.setToken);

  // 쿠키에 토큰이 있을때 지우기
  // const handleLogout = () => {
  //   removeCookies('access_token');
  // };

  // 로컬스토리지에 토큰이 있을 때 지우기
  // const handleLogout = () => {
  //   localStorage.removeItem('access_token');
  // };

  // 전역 State에 토큰이 있을 때, state 값 리셋으로 만들기
  const handleLogout = () => {
    localStorage.removeItem('access_token');
    setStoreToken(null);
  };

  return (
    <div>
      메인페이지
      <Button onClick={handleLogout}>로그아웃</Button>
      <Link to="/mypage">
        <Button variant="outline-dark">마이페이지 이동하기</Button>
      </Link>
      <MainCalendar />
      {/* 모달창 */}
      <AddEventNomalModal />
      <DeleteEventModal />
    </div>
  );
};

export default Main;
