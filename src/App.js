import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import Main from 'pages/Main';
import MyInfo from 'pages/MyInfo';
import RoleManage from 'pages/RoleManage';
import NotFound from 'pages/NotFound';
import useAuthStore from 'store/useAuthStore';
import RequireAuth from 'RequireAuth';
import RequireRole from 'ReruireRole';
import { Layout } from 'components/Main/Layout';
import { setupInterceptor } from 'api';
import { useCookies } from 'react-cookie';

function App() {
  const { token } = useAuthStore();
  const setToken = useAuthStore((state) => state.setToken);

  const [cookies] = useCookies(['refresh_token']);
  const refreshToken = cookies.refresh_token;

  setupInterceptor(token, refreshToken, setToken);

  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/signup" element={<SignUp />} />
        <Route element={token ? <Layout /> : null}>
          <Route path="/" element={token ? <Main /> : <LogIn />} />
          <Route element={<RequireAuth />}>
            <Route path="/mypage" element={<MyInfo />} />
            <Route element={<RequireRole />}>
              <Route path="/role" element={<RoleManage />} />
            </Route>
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
