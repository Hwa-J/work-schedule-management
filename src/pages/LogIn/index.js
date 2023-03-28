import { Link } from 'react-router-dom';
import { TemporaryBtns, LoginLayout } from './style';
import Button from 'react-bootstrap/Button';
import { FormContainer } from 'components/Common/FormContainer';
import LoginForm from 'components/LoginForm';

const LogIn = () => {
  return (
    <>
      <TemporaryBtns className="centerAlign">
        <Link to="/main">
          <Button variant="outline-dark">메인화면 이동하기</Button>
        </Link>
        <Link to="/mypage">
          <Button variant="outline-dark">마이페이지 이동하기</Button>
        </Link>
      </TemporaryBtns>
      <LoginLayout className="centerAlign">
        <FormContainer width="450px">
          <LoginForm />
          <Link to="/signup" className="signupLinkBtn">
            register
          </Link>
        </FormContainer>
      </LoginLayout>
    </>
  );
};

export default LogIn;
