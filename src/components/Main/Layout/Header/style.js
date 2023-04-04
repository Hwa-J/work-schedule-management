import styled from 'styled-components';
import { Row } from 'react-bootstrap';

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
export const HeaderSideBarContainer = styled.div`
  width: 100%;
  height: calc(100vh - 35px);
  padding-top: 10px;
  position: absolute;
  overflow: hidden;
  transition: 0.5s;
  visibility: hidden;
  transform: translateX(-100%);
  z-index: 5;

  &.show {
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
