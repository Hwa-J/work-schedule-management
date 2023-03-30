import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';
import axios from 'axios';
import useCookies from 'react-cookie/cjs/useCookies';
import { useAuthStore } from 'store/store.js';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const setStoreToken = useAuthStore((state) => state.setToken);

  // const [cookies, setCookies] = useCookies(['access_token']);

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
        .then(function (res) {
          // 쿠키에 토큰 저장하기 (보통은 서버에서 넣어서 보내기 때문에 필요없음.  json서버 테스트를 위한 코드)
          // setCookies('access_token', res.data.accessToken);

          // 로컬 스토리지에 토큰 저장하기
          // localStorage.setItem('access_token', res.data.accessToken);

          //전역 State에 토큰 저장하기
          setStoreToken(res.data.token.accessToken);
        })
        .catch(function (error) {
          console.log(error);
          alert('ID와 비밀번호를 확인해 주세요.');
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
