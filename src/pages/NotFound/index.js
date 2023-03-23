import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div>
      페이지를 찾지 못하였습니다
      <button onClick={() => navigate(-1)}>이전 페이지로 돌아가기</button>
    </div>
  );
};

export default NotFound;
