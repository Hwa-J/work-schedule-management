import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from 'GlobalStyle';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogIn from 'pages/LogIn';
import SignUp from 'pages/SignUp';
import Main from 'pages/Main';
import MyInfo from 'pages/MyInfo';
import NotFound from 'pages/NotFound';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<Main />} />
        <Route path="/mypage" element={<MyInfo />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
