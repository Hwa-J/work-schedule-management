import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import * as S from './style';

// 툴 바 커스텀
export const ToolBarComponent = (props) => {
  const { date } = props;

  const navigate = (action) => {
    props.onNavigate(action);
  };

  return (
    <S.ToolBar className="rbc-toolbar">
      <div className="rbc-btn-container centerAlign">
        <button
          type="button"
          className="centerAlign"
          onClick={navigate.bind(null, 'PREV')}
        >
          <IoIosArrowBack />
        </button>
        <S.CurrentMonthInfo className="rbc-toolbar-label">
          <span>{date.getFullYear()}</span>
          <span>{date.getMonth() + 1}</span>
        </S.CurrentMonthInfo>
        <button
          type="button"
          className="centerAlign"
          onClick={navigate.bind(null, 'NEXT')}
        >
          <IoIosArrowForward />
        </button>
      </div>
      <S.TodayMonthButton
        type="button"
        className="centerAlign"
        onClick={navigate.bind(null, 'TODAY')}
      >
        이번달
      </S.TodayMonthButton>
    </S.ToolBar>
  );
};
