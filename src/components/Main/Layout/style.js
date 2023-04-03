import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

// Column 스타일
export const ColRemovePadding = styled(Col)`
  padding: 0;
`;
// Outlet Container 스타일
export const OutletContainer = styled(Row)`
  margin: auto;
  height: calc(100vh - 50px);
  position: relative;
`;
