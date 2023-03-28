// 달력에서 드래그로 스케쥴 추가
export const handleSelectSlot =
  ({ events, add }) =>
  (props) => {
    const { start, end } = props;
    // todo: 모달창으로 category, name 이력값 받기
    const name = window.prompt('New Event name');
    if (name) {
      add({
        start,
        end: new Date(end),
        name,
        category: '연차', // 테스트용 고정값
        user_account_id: '001', // 테스트용 고정값
        event_id: `${events.length + 1}`, // 테스트용 고정값
      });
    }
  };
