import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const CategorySelector = styled(Form.Select).attrs({
  size: 'sm',
  defaultValue: '모두보기',
})`
  width: auto;
  position: absolute;
  left: 0;
`;
