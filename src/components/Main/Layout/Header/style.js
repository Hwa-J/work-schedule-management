import styled from 'styled-components';
import { Row } from 'react-bootstrap';
import { GrClose } from 'react-icons/gr';

// Header 스타일
export const HeaderRow = styled(Row).attrs({ className: 'centerAlign' })`
  justify-content: space-between;
  .d-block.d-lg-none.d-xl-none {
    flex-grow: 0;
  }
  svg {
    font-size: 18px;
    cursor: pointer;
  }
`;

// 사이드바 뒷 배경
export const SideBarBackground = styled.div`
  width: calc(100vw - 12px);
  height: 100vh;
  position: absolute;
  top: 0;
  background-color: #000000ab;
  z-index: 10;
  visibility: hidden;

  &.show {
    visibility: visible;
  }
`;
export const CloseSvg = styled(GrClose)`
  position: absolute;
  right: 14%;
  top: 50%;
  font-size: 24px !important;
  path {
    stroke: #fff;
  }
`;

export const HeaderSideBarContainer = styled.div`
  width: 70%;
  position: absolute;
  overflow: hidden;
  transition: 0.5s;
  visibility: hidden;
  transform: translateX(-100%);

  .show & {
    visibility: visible;
    transform: translateX(-14px);
  }
`;

export const UserInfoContainer = styled.div.attrs({
  className: 'centerAlign',
})`
  height: 50px;
  justify-content: end;

  span {
    padding: 0 8px;
  }
`;
export const RoleInfo = styled.div`
  padding: 4px;
  margin-right: 10px;
  border-radius: 4px;
  font-weight: 600;
  background-color: ${(props) => props.color};
`;
export const Name = styled.span`
  font-weight: 600;
`;
