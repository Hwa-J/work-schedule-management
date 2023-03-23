import { Link } from 'react-router-dom';
import { TemporaryBtns } from './style';
import Button from 'react-bootstrap/Button';

const LogIn = () => {
  return (
    <div>
      <TemporaryBtns className="centerAlign">
        <Link to="/main">
          <Button variant="outline-dark">메인화면 이동하기</Button>
        </Link>
        <Link to="/signup">
          <Button variant="outline-dark">회원가입화면 이동하기</Button>
        </Link>
        <Link to="/mypage">
          <Button variant="outline-dark">마이페이지 이동하기</Button>
        </Link>
      </TemporaryBtns>
      로그인페이지
    </div>
  );
};

export default LogIn;
