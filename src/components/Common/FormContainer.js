import styled from 'styled-components';

export const FormContainer = styled.div`
  position: relative;
  width: ${(props) => props.width};
  background-color: ${(props) => props.color || '#eee'};
  border-radius: 20px;
  padding: 70px 30px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  button {
    margin-top: 30px;
  }
`;
