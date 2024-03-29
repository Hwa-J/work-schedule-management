import styled from 'styled-components';

// 캘린더 툴 바 커스텀
export const ToolBar = styled.div`
  align-items: end;
  justify-content: space-between;

  button {
    height: 24px;
    padding: 4px;
    box-sizing: border-box;
    display: flex;
    border-radius: 4px;
    box-shadow: 0px 0.6px 2px rgba(0, 0, 0, 0.2);
  }

  .rbc-btn-container.centerAlign {
    padding-right: 100px;
    align-items: end;
  }
`;

// 캘린더 현재 달 버튼 커스텀
export const CurrentMonthInfo = styled.div`
  display: flex;
  flex-direction: column;
  span {
    padding: 4px;
  }
  span:last-child {
    font-size: 24px;
    font-weight: 600;
  }
`;
