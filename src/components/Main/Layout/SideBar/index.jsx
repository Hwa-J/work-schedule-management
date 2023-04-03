import { OverlayTrigger, Popover, Button } from 'react-bootstrap';
import * as S from './style';
import useLoggedUserStore from 'store/useLoggedUserStore';
import { useLocation } from 'react-router-dom';

export const SideBar = () => {
  const { role } = useLoggedUserStore();
  return (
    <S.SideBar>
      <div>
        <S.PageLink to="/">Main</S.PageLink>
        <S.PageLink to="/mypage">MyPage</S.PageLink>
        <div>
          {/* todo: 관리자 role만 링크 버튼 보여주기 */}
          {role === 'ADMIN' ? (
            <>
              <S.PageLink to="/role ">권한 관리</S.PageLink>
            </>
          ) : null}
        </div>
      </div>
      <Manual />
    </S.SideBar>
  );
};

// 사용설명 버튼
const Manual = () => {
  const location = useLocation().pathname;

  return (
    <OverlayTrigger
      trigger="click"
      placement="right"
      overlay={
        location.includes('role') ? (
          <Popover>
            <Popover.Header as="h2">사용 설명</Popover.Header>
            <S.ManualContent>
              <ul>
                <li>
                  <h3>대상 선택</h3>
                  <ul>
                    <S.MarginLeftLiEL>
                      <h4>검색:</h4>
                      변경할 대상의 이름을 <strong>정확히 기입</strong> 하고
                      엔터
                    </S.MarginLeftLiEL>
                    <S.MarginLeftLiEL>
                      <h4>선택:</h4>
                      검색 결과 중 원하는 대상 <strong>클릭</strong>
                    </S.MarginLeftLiEL>
                  </ul>
                </li>
                <S.BoderLine>
                  <h3>권한 선택</h3>
                  <ul>
                    <S.MarginLeftLiEL>
                      변경할 권한 <strong>클릭</strong>
                    </S.MarginLeftLiEL>
                  </ul>
                </S.BoderLine>
                <li>
                  <h3>업데이트</h3>
                  <ul>
                    <S.MarginLeftLiEL>
                      업데이트 버튼 활성화 시 <strong>클릭</strong>
                    </S.MarginLeftLiEL>
                  </ul>
                </li>
              </ul>
            </S.ManualContent>
          </Popover>
        ) : (
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
        )
      }
    >
      <Button variant="secondary">사용 설명</Button>
    </OverlayTrigger>
  );
};
