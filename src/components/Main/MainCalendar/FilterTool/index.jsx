import { useEventsActions } from 'store/useEventsStore';
import * as S from './style';
import { Form } from 'react-bootstrap';
import { useCallback } from 'react';

export const FilterTool = () => {
  const { filter, filterMyEvents } = useEventsActions();

  const handleSelectedValue = useCallback(
    ({ target }) => {
      filter(target.value);
    },
    [filter],
  );
  const handleCheckedValue = useCallback(
    ({ target }) => {
      filterMyEvents(target.checked);
    },
    [filterMyEvents],
  );
  return (
    <S.FilterTool>
      <Form.Select
        defaultValue={'모두 보기'}
        onChange={handleSelectedValue}
        size="sm"
      >
        <option>모두 보기</option>
        <option>연차</option>
        <option>당직</option>
      </Form.Select>
      <S.SwitchForm>
        <Form.Check
          type="checkbox"
          id="default-checkbox"
          label="내 일정만 보기"
          className="centerAlign"
          onChange={handleCheckedValue}
        />
      </S.SwitchForm>
    </S.FilterTool>
  );
};
