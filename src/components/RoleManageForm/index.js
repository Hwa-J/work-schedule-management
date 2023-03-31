import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormLabel } from 'react-bootstrap';
import SearchBar from 'components/SearchBar';
import useSearchStore from 'store/useSearchStore';
import { useState } from 'react';

const RoleManageForm = () => {
  const { name, email } = useSearchStore();
  const [selected, setSelected] = useState(false);
  const setSearchName = useSearchStore((state) => state.setName);
  const setSearchEmail = useSearchStore((state) => state.setEmail);

  const handleUpdate = (e) => {
    e.preventDefault();
    setSearchName('');
    setSearchEmail('');
    alert('권한이 업데이트 되었습니다.');
  };

  return (
    <>
      <SearchBar />
      <Form>
        <Form.Group as={Row} className="mb-3" controlId="formName">
          <FormLabel column sm={2}>
            이름
          </FormLabel>
          <FormLabel column sm={10}>
            {name === '' ? '아직 검색되지 않았습니다' : name}
          </FormLabel>
        </Form.Group>

        <Form.Group as={Row} className="mb-3" controlId="formMail">
          <FormLabel column sm={2}>
            email
          </FormLabel>
          <FormLabel column sm={10}>
            {email === '' ? '아직 검색되지 않았습니다' : email}
          </FormLabel>
        </Form.Group>

        <Form.Group
          as={Row}
          className="mb-3 inlineChecks"
          controlId="formCheck"
        >
          <Form.Label as="legend" column sm={2}>
            권한
          </Form.Label>
          <Col sm={4}>
            <Form.Check
              inline
              className="inlineChecks"
              type="radio"
              label="일반 유저"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              onClick={() => {
                setSelected(true);
              }}
            />
          </Col>
          <Col sm={4}>
            <Form.Check
              inline
              className="inlineChecks"
              type="radio"
              label="관리자"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
              onClick={() => {
                setSelected(true);
              }}
            />
          </Col>
        </Form.Group>
        <div className="centerAlign">
          {name && selected === true ? (
            <Button type="submit" onClick={handleUpdate}>
              업데이트
            </Button>
          ) : (
            <Button type="submit" disabled>
              업데이트
            </Button>
          )}
        </div>
      </Form>
    </>
  );
};

export default RoleManageForm;
