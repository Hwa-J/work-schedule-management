import styled from 'styled-components';

export const TemporaryBtns = styled.div`
  position: fixed;
  a {
    display: block;
    margin: 10px;
  }
`;

export const LoginLayout = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  .signupLinkBtn {
    padding: 5px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, 0);
    top: 260px;
  }
`;
