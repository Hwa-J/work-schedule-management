import styled from 'styled-components';
import { Form, Row } from 'react-bootstrap';

export const FilterTool = styled(Row).attrs({
  className: 'centerAlign',
})`
  padding-left: 10px;
`;
export const SwitchForm = styled(Form)`
  width: max-content;
  flex-shrink: 0;

  label {
    padding-left: 8px;
  }
  .form-check {
    padding-left: 0px;
    margin-bottom: 0;
  }
  .form-check .form-check-input {
    margin-top: 0;
    margin-left: 0;
  }
`;
