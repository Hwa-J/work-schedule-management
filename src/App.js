import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import Main from 'pages/Main';
import MyInfo from 'pages/MyInfo';
import RoleManage from 'pages/RoleManage';
import NotFound from 'pages/NotFound';
import useCookies from 'react-cookie/cjs/useCookies';
import { useAuthStore } from 'store/store.js';
import RequireAuth from 'RequireAuth';
import { useEffect } from 'react';

function App() {
  // 쿠키에 토큰이 있을때
  // const [cookies] = useCookies(['access_token']);
  // const token = cookies.access_token;

  // 로컬스토리지에 토큰이 있을때
  // const { token } = useTokenStore();

  // 전역 state에 토큰이 있을때
  const { token } = useAuthStore();

  useEffect(() => {
    if (!token) {
      console.log('store 비워짐' + token);
    } else {
      console.log('토큰을 store에 저장했습니다' + token);
    }
  }, [token]);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={token ? <Main /> : <LogIn />} /> */}
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route element={<RequireAuth />}> */}
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyInfo />} />
        <Route path="/role" element={<RoleManage />} />
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
