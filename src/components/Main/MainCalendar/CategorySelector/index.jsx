import { useEventsActions } from 'store/useEventsStore';
import * as S from './style';

export const CategorySelector = () => {
  const { filter } = useEventsActions();

  const handleSelectedValue = ({ target }) => {
    filter(target.value);
  };
  return (
    <S.CategorySelector
      defaultValue={'모두 보기'}
      onChange={handleSelectedValue}
    >
      <option>모두 보기</option>
      <option>연차</option>
      <option>당직</option>
    </S.CategorySelector>
  );
};
