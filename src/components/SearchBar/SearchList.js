import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { SearchListContainer } from './style';

const SearchList = ({ onClick, users }) => {
  return (
    <SearchListContainer>
      <Form>
        <Form.Group as={Row}>
          <Col sm={2}></Col>
          <Col sm={10}>
            <ul className="searchListWrapper">
              {users.map((user) => (
                <li
                  key={user.id}
                  onClick={() => onClick(user.name, user.email)}
                >
                  <span className="name">{user.name}</span>
                  <span className="email">{user.email}</span>
                </li>
              ))}
            </ul>
          </Col>
        </Form.Group>
      </Form>
    </SearchListContainer>
  );
};

export default SearchList;
