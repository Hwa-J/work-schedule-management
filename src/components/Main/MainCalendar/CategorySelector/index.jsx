import { useEventsActions } from 'store/useEventsStore';
import * as S from './style';
import { Form } from 'react-bootstrap';

export const CategorySelector = () => {
  const { filter } = useEventsActions();

  const handleSelectedValue = ({ target }) => {
    filter(target.value);
  };
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
        />
      </S.SwitchForm>
    </S.FilterTool>
  );
};
