import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormLabel } from 'react-bootstrap';
import { useRef, useState, useEffect } from 'react';
import { SearchBarContainer } from './style';
import SearchList from './SearchList';
import axios from 'axios';
import { useSearchStore, useAuthStore } from 'store/store';

const SearchBar = () => {
  const [keyword, setKeyword] = useState('');
  const [opened, setOpened] = useState(false);
  const [users, setUsers] = useState(null);
  const inputRef = useRef();
  const setStoreName = useSearchStore((state) => state.setName);
  const setStoreEmail = useSearchStore((state) => state.setEmail);
  const { token } = useAuthStore();

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (keyword === '') {
      alert('검색어를 입력해 주세요');
    } else {
      axios
        .get(`http://54.180.9.59:8080/api/users?name=${keyword}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then(function (res) {
          setUsers(res.data.users);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    setOpened(true);
    inputRef.current.blur();
  };

  const handleListClick = (name, email) => {
    setOpened(false);
    setKeyword('');
    setStoreName(name);
    setStoreEmail(email);
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
      {opened && users ? (
        <SearchList onClick={handleListClick} users={users} />
      ) : null}
    </SearchBarContainer>
  );
};

export default SearchBar;
