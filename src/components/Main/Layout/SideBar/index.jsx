import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import * as S from './style';

export const SideBar = () => {
  return (
    <S.SideBar>
      <div>
        <S.PageLink to="/main">Main</S.PageLink>
        <S.PageLink to="/mypage">MyPage</S.PageLink>
        <div>
          {/* todo: 관리자 role만 링크 버튼 보여주기 */}
          <S.PageLink to="/role ">권한 관리</S.PageLink>
          <S.PageLink to="/events-list">일정 리스트</S.PageLink>
        </div>
      </div>
      <Manual />
    </S.SideBar>
  );
};

// 사용설명 버튼
const Manual = () => {
  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={
        <Popover>
          <Popover.Header as="h2">사용 설명</Popover.Header>
          <S.ManualContent>
            <ul>
              <li>
                <h3>추가</h3>
                <ul>
                  <S.MarginLeftLiEL>
                    <h4>하루:</h4>
                    일자 칸 <strong>클릭</strong>
                  </S.MarginLeftLiEL>
                  <S.MarginLeftLiEL>
                    <h4>하루 이상:</h4>
                    일자 칸 시작일 ~ 종료일 <strong>드래그</strong>
                  </S.MarginLeftLiEL>
                </ul>
              </li>
              <S.BoderLine>
                <h3>수정</h3>
                <ul>
                  <S.MarginLeftLiEL>
                    <h4>기간 수정:</h4>
                    등록된 일정바 길이로 조절
                  </S.MarginLeftLiEL>
                  <S.MarginLeftLiEL>
                    <h4>일자 수정:</h4>
                    일정바 원하는 일자로 <strong>드래그&드롭</strong>
                  </S.MarginLeftLiEL>
                </ul>
              </S.BoderLine>
              <li>
                <h3>삭제</h3>
                <ul>
                  <S.MarginLeftLiEL>
                    등록된 일정바 <strong>더블 클릭</strong>
                  </S.MarginLeftLiEL>
                </ul>
              </li>
            </ul>
          </S.ManualContent>
        </Popover>
      }
    >
      <Button variant="secondary">사용 설명</Button>
    </OverlayTrigger>
  );
};
