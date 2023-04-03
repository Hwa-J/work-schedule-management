import { Link } from 'react-router-dom';
import { LoginLayout } from './style';
import { FormContainer } from 'components/Common/FormContainer';
import LoginForm from 'components/LoginForm';

const LogIn = () => {
  return (
    <>
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
