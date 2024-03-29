import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import useAuthStore from 'store/useAuthStore';
import useLoggedUserStore from 'store/useLoggedUserStore';

const LoginForm = () => {
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [, setCookies] = useCookies(['refresh_token']);
  const setStoreToken = useAuthStore((state) => state.setToken);
  const setId = useLoggedUserStore((state) => state.setId);
  const setUsername = useLoggedUserStore((state) => state.setUsername);
  const setName = useLoggedUserStore((state) => state.setName);
  const setEmail = useLoggedUserStore((state) => state.setEmail);
  const setRole = useLoggedUserStore((state) => state.setRole);

  const handleChangeIdValue = (e) => {
    setLoginId(e.target.value);
  };
  const handleChangePasswordValue = (e) => {
    setLoginPassword(e.target.value);
  };

  // 로그인 버튼 클릭시,post요청 -> 성공하면 쿠키에 토큰값 저장
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginId === '' || loginPassword === '') {
      alert('ID와 비밀번호를 입력해 주세요');
    } else {
      axios
        .post('http://54.180.9.59:8080/api/login', {
          username: loginId,
          password: loginPassword,
        })
        .then((res) => {
          // 쿠키에 refresh 토큰 저장하기
          setCookies('refresh_token', res.data.token.refreshToken);

          //전역 State에 access 토큰 저장하기
          setStoreToken(res.data.token.accessToken);

          //전역 State에 유저정보 저장하기
          setId(res.data.id);
          setUsername(res.data.userName);
          setName(res.data.name);
          setEmail(res.data.email);
          setRole(res.data.role);
        })
        .catch((error) => {
          console.log(error);
          if (error.response.data.errorCode === 6) {
            alert('ID 또는 비밀번호를 다시 확인해 주세요.');
          } else if (error.response.data.errorCode === 22) {
            alert('입력하신 회원 정보를 찾지 못했습니다.  다시 확인해 주세요.');
          }
        });
    }
  };

  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formId">
        <Col sm>
          <Form.Control
            type="string"
            placeholder="ID"
            value={loginId}
            onChange={handleChangeIdValue}
          />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formPassword">
        <Col sm>
          <Form.Control
            type="password"
            placeholder="Password"
            value={loginPassword}
            onChange={handleChangePasswordValue}
          />
        </Col>
      </Form.Group>

      <div className="centerAlign">
        <Button type="submit" onClick={handleSubmit}>
          로그인
        </Button>
      </div>
    </Form>
  );
};

export default LoginForm;
