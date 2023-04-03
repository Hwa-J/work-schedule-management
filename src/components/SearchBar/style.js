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
    padding: 10px;
    border: 1px solid #ced4da;
    border-radius: 0.375rem;
    li {
      cursor: pointer;
      margin: 5px 0;
      padding: 7px;
      &:hover {
        font-weight: 700;
        background-color: #e8f1ff;
      }
    }
    .noResult {
      text-align: center;
      color: #666;
    }
  }
`;
