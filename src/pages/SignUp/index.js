import RegisterStyle from "./style";
import React from "react";
import axios from "axios";
import useRegisterStore from "store/useRegisterStore";

const SignUp = () => {

  //보관되어있는 zustand 데이터를 가지고옴
  const {
    id,
    usename,
    email,
    password,
    // confirmPwd,
    setId,
    setUsename,
    setEmail,
    setPassword,
    // setConfirmPwd,
  } = useRegisterStore();


  // 이메일 유효성 검사
  const checkEmail = (e) => {
    var regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i
    // 형식에 맞는 경우 true 리턴
    console.log('이메일 유효성 검사 :: ', regExp.test(e.target.value))
  }
  //비밀번호 유효성 검사
  const checkPassword = (e) => {
    //  8 ~ 10자 영문, 숫자 조합
    var regExp = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{8,10}$/
    // 형식에 맞는 경우 true 리턴
    console.log('비밀번호 유효성 검사 :: ', regExp.test(e.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //비밀헌호가 일치할때 값을 넘기고 일치하지않으면 alert창이 뜨게
    if (password) {
      axios.post('/api/auth/signup', { usename, email, password })
        .then((response) => {
          console.log(response);
          console.log("dfdfdf")
        })
        .catch((error) => {
          console.log(error);
        })
      return;
    } else {
      alert("비밀번호가 일치하지 않습니다")
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <RegisterStyle>
        <div className="centerAlign">
          <input
            type='id'
            placeholder="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input
            type='usename'
            placeholder="usename"
            value={usename}
            onChange={(e) => setUsename(e.target.value)}
          />
          <input
            type='email'
            placeholder="email"
            value={email}
            onBlur={checkEmail}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder="password"
            onBlur={checkPassword}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <input
            type='password'
            placeholder="confirmPwd"
            value={confirmPwd}
            onChange={(e) => setConfirmPwd(e.target.value)}
          /> */}
        </div>
        <button type="submit">회원가입</button>
      </RegisterStyle>
    </form>
  )
};

export default SignUp;
