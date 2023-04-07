import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { InputBox, Wthdr } from 'components/SignUp/style';
import useAuthStore from 'store/useAuthStore';
import useLoggedUserStore from 'store/useLoggedUserStore';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import * as S from './style';

const MyInfoPage = () => {
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');
  const [usernameError, setUsernameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const { token } = useAuthStore(); //token가져옴
  const user = useLoggedUserStore(); //로그인 유저정보를 user로 담음

  const [cookies, removeCookies] = useCookies(['refresh_token']);
  const setStoreToken = useAuthStore((state) => state.setToken);
  const setLoggedId = useLoggedUserStore((state) => state.setId);
  const setLoggedUsername = useLoggedUserStore((state) => state.setUsername);
  const setLoggedName = useLoggedUserStore((state) => state.setName);
  const setLoggedEmail = useLoggedUserStore((state) => state.setEmail);
  const setLoggedRole = useLoggedUserStore((state) => state.setRole);

  const onChangeUserId = (e) => {
    const userIdRegex = /^[a-z0-9]{5,10}$/;
    if (!e.target.value || userIdRegex.test(e.target.value))
      setUsernameError(false);
    else setUsernameError(true);
    setUsername(e.target.value);
  };
  const onChangeName = (e) => {
    //이름은 2~5글자 한글로 입력
    const nameRegex = /^[가-힣]{2,5}$/;
    if (!e.target.value || nameRegex.test(e.target.value)) setNameError(false);
    else setNameError(true);
    setName(e.target.value);
  };
  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    //  8 ~ 16자 영문, 숫자,특수문자 조합
    var regExp = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;
    // 형식에 맞는 경우 true 리턴
    if (!e.target.value || regExp.test(e.target.value)) setPasswordError(false);
    else setPasswordError(true);
    setPassword(e.target.value);
  };
  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    // 형식에 맞는 경우 true 리턴
    if (!e.target.value || regExp.test(e.target.value)) setEmailError(false);
    else setEmailError(true);
    setEmail(e.target.value);
  };

  const validation = () => {
    if (!username) setUsername(true);
    if (!password) setPasswordError(true);
    if (!email) setEmailError(true);
    if (username && password && email) return true;
    else return false;
  };

  const navi = useNavigate();
  const loginNavi = () => {
    navi('/');
  };

  useEffect(() => {
    //백엔드에서 받아오는회원정보O
    if (!token || !user) {
      //쓸데없는 api호출막는거
      return;
    }
    axios
      .get(`http://54.180.9.59:8080/api/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setName(response.data.user.name);
        setUsername(response.data.user.username);
        setEmail(response.data.user.email);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [token, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === confirmPwd && validation()) {
      //id제외 수정하고싶은데이터 입력후 post주소로
      axios
        .post(
          `http://54.180.9.59:8080/api/users/${user.id}/update`,
          {
            name: name,
            email: email,
            password: password,
            confirmPwd: confirmPwd,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          //수정된 회원정보
          alert('수정 완료!');
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      alert('비밀번호가 일치하지 않습니다');
    }
  };

  const handleWithdrawal = (e) => {
    e.preventDefault();
    const confirmed = window.confirm(`${user.name}의 탈퇴를 진행하시겠습니까?`);
    if (confirmed) {
      axios
        .post(
          `http://54.180.9.59:8080/api/users/${user.id}/delete`,
          { user },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          },
        )
        .then((response) => {
          //   loginNavi();
          removeCookies('refresh_token');
          setStoreToken(null);
          setLoggedId(null);
          setLoggedUsername(null);
          setLoggedName(null);
          setLoggedEmail(null);
          setLoggedRole(null);
          localStorage.removeItem('access_token');
          localStorage.removeItem('user_data');
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <S.StyledForm onSubmit={handleSubmit}>
      <div>
        <S.StyledFormContainer>
          <Form.Group className="mb-3">
            <InputBox>
              <Form.Label>ID</Form.Label>
              <Form.Control
                type="username"
                value={username}
                onChange={onChangeUserId}
                disabled
              />
              {usernameError && <span>형식이 맞지 않습니다</span>}
            </InputBox>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputBox>
              <Form.Label>이름</Form.Label>
              <Form.Control type="name" value={name} onChange={onChangeName} />
              {nameError && <span>이름 형식이 맞지 않습니다.</span>}
            </InputBox>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputBox>
              <Form.Label>E-mail</Form.Label>
              <Form.Control type="email" value={email} onChange={checkEmail} />
              {emailError && <span>이메일 형식이 맞지 않습니다</span>}
            </InputBox>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputBox>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={checkPassword}
              />
              {passwordError && <span>비밀번호 형식이 맞지 않습니다</span>}
            </InputBox>
          </Form.Group>
          <Form.Group className="mb-3">
            <InputBox>
              <Form.Label>ConfirmPwd</Form.Label>
              <Form.Control
                type="password"
                value={confirmPwd}
                onChange={(e) => setConfirmPwd(e.target.value)}
              />
            </InputBox>
          </Form.Group>
          <Button
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              bottom: '20px',
            }}
            type="submit"
          >
            회원정보 수정
          </Button>
          <Wthdr onClick={handleWithdrawal}>회원 탈퇴</Wthdr>
        </S.StyledFormContainer>
      </div>
    </S.StyledForm>
  );
};

export default MyInfoPage;
