import styled from 'styled-components';
import { Form } from 'react-bootstrap';

export const FilterTool = styled.div.attrs({
  className: 'centerAlign',
})`
  padding-left: 10px;
  position: absolute;
  left: 0;
`;
export const SwitchForm = styled(Form)`
  flex-shrink: 0;

  label {
    padding-left: 8px;
  }
  .form-check {
    padding-left: 30px;
    margin-bottom: 0;
  }
  .form-check .form-check-input {
    margin-top: 0;
    margin-left: 0;
  }
`;
