import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchListContainer } from './style';

const SearchList = ({ onClick }) => {
  return (
    <SearchListContainer>
      <Form>
        <Form.Group as={Row}>
          <Col sm={2}></Col>
          <Col sm={10}>
            <ul className="searchListWrapper">
              <li onClick={() => onClick()}>검색결과1</li>
              <li onClick={() => onClick()}>검색결과2</li>
            </ul>
          </Col>
        </Form.Group>
      </Form>
    </SearchListContainer>
  );
};

export default SearchList;
