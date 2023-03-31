import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import Main from 'pages/Main';
import MyInfo from 'pages/MyInfo';
import RoleManage from 'pages/RoleManage';
import NotFound from 'pages/NotFound';
import { useAuthStore } from 'store/store.js';
import RequireAuth from 'RequireAuth';
import RequireRole from 'ReruireRole';
import { Layout } from 'components/Main/Layout';

function App() {
  const { token } = useAuthStore();

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        {/* <Route path="/" element={token ? <Main /> : <LogIn />} /> */}
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route element={<RequireAuth />}> */}
        <Route element={<Layout />}>
          <Route path="/main" element={<Main />} />
          <Route path="/mypage" element={<MyInfo />} />
          <Route element={<RequireRole />}>
            <Route path="/role" element={<RoleManage />} />
          </Route>
        </Route>
        {/* </Route> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
