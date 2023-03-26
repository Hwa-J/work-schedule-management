import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import axios from 'axios';

const LoginForm = () => {
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');

  const handleChangeIdValue = (e) => {
    setLoginId(e.target.value);
  };
  const handleChangePasswordValue = (e) => {
    setLoginPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginId === '' || loginPassword === '') {
      alert('ID와 비밀번호를 입력해 주세요');
    } else {
      axios
        .post('http://localhost:4000/login', {
          email: loginId,
          password: loginPassword,
        })
        .then(function (res) {
          console.log(res.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  };

  return (
    <div>
      <Container className="panel">
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
          <br />

          <div className="d-grid gap-1">
            <Button variant="secondary" type="submit" onClick={handleSubmit}>
              로그인
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default LoginForm;
