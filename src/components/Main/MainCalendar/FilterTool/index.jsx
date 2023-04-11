import * as S from './style';
import { Col, Form } from 'react-bootstrap';
import { useSelectedFiltersActions } from 'store/useSelectedFilterStore';

export const FilterTool = () => {
  const { setFilter, setShowMyEvents } = useSelectedFiltersActions();

  return (
    <S.FilterTool>
      <Col>
        <Form.Select
          defaultValue={'모두 보기'}
          onChange={(e) => setFilter(e.target.value)}
          size="sm"
        >
          <option>모두 보기</option>
          <option>연차</option>
          <option>당직</option>
        </Form.Select>
      </Col>
      <Col>
        <S.SwitchForm>
          <Form.Check
            type="checkbox"
            id="default-checkbox"
            label="내 일정만 보기"
            className="centerAlign"
            onChange={setShowMyEvents}
          />
        </S.SwitchForm>
      </Col>
    </S.FilterTool>
  );
};
