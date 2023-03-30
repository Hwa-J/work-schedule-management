import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormLabel } from 'react-bootstrap';
import { useRef, useState } from 'react';
import { SearchBarContainer } from './style';
import SearchList from './SearchList';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [opened, setOpened] = useState(false);
  const inputRef = useRef();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword === '') {
      alert('검색어를 입력해 주세요');
    } else {
      console.log(`${keyword} 검색중`);
      setOpened(true);
    }
    inputRef.current.blur();
  };

  const handleListClick = () => {
    setOpened(false);
    setKeyword('');
  };

  return (
    <SearchBarContainer>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Row} className="mb-3" controlId="formSearch">
          <FormLabel column sm={2}>
            검색
          </FormLabel>
          <Col sm>
            <Form.Control
              type="text"
              placeholder={'검색할 이름을 입력하세요'}
              value={keyword}
              onChange={handleChange}
              ref={inputRef}
            />
          </Col>
        </Form.Group>
      </Form>
      {opened ? <SearchList onClick={handleListClick} /> : null}
    </SearchBarContainer>
  );
};

export default SearchBar;
