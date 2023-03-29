import { Button, Form } from 'react-bootstrap';
import styled from 'styled-components';

export const ModalForm = styled(Form)`
  .form-label {
    font-weight: 600;
  }
  .col-sm-10 {
    display: flex;
  }
  .form-check-inline {
    display: flex;
    align-items: center;
  }
  .form-check-input {
    margin-top: 0;
    margin-right: 12px;
  }
  .form-check-label {
    margin-right: 20px;
  }
`;

export const StyledButton = styled(Button)`
  margin-left: 53.7px;
  flex-grow: 0.3;
`;
