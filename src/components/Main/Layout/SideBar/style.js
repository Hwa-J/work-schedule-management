import { Popover } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const SideBar = styled.nav.attrs({
  className: 'centerAlign',
})`
  // 레이아웃 디자인에 따라 height 값 변경
  height: 100vh;
  /* height: calc(100vh - 50px); */
  justify-content: space-around;
  background-color: #fafafc;
  &,
  & div {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
export const PageLink = styled(NavLink)`
  width: 100%;
  padding: 20px 0;
  text-align: center;

  &.active {
    font-size: 18px;
    font-weight: 600;
    color: #fff;
    background-color: #19618b;
  }
`;

// 사용설명 툴팁 내용 스타일
export const ManualContent = styled(Popover.Body)`
  word-break: keep-all;
  h3 {
    font-size: 16px;
    font-weight: 600;
    color: #2a5761;
  }
  h4 {
    font-weight: 600;
    color: #5c868a;
  }
  strong {
    font-weight: 600;
  }
`;
export const BoderLine = styled.li`
  padding: 10px 0;
  margin: 10px 0;
  border-top: 1px solid var(--bs-popover-border-color);
  border-bottom: 1px solid var(--bs-popover-border-color);
`;
export const MarginLeftLiEL = styled.li`
  margin-left: 6px;
`;
