import styled from 'styled-components';

export const SearchBarContainer = styled.div`
  position: relative;
`;

export const SearchListContainer = styled.div`
  position: absolute;
  top: 38px;
  width: 100%;
  .searchListWrapper {
    background-color: #fff;
    padding: 15px;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    li {
      cursor: pointer;
      margin: 12px 0;
      background-color: red;
    }
  }
`;
