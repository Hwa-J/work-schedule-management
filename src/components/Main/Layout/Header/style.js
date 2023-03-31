import styled from 'styled-components';

// Header 스타일
export const Header = styled.header.attrs({
  className: 'centerAlign',
})`
  height: 50px;
  margin-right: 40px;
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
  /* background-color: ${({ role }) =>
    role === '관리자' ? '#ffafa1' : '#e7e7e7'}; */
`;
export const Name = styled.span`
  font-weight: 600;
`;
