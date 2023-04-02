import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormLabel } from 'react-bootstrap';
import SearchBar from 'components/SearchBar';
import useSearchStore from 'store/useSearchStore';
import useAuthStore from 'store/useAuthStore';
import { useState } from 'react';
import useUserUpdatedStore from 'store/useUserUpdatedStore';
import { instance } from 'api';

const RoleManageForm = () => {
  const { id, name, email } = useSearchStore();
  const [selectedRole, setSelectedRole] = useState('');
  const setSearchId = useSearchStore((state) => state.setId);
  const setSearchName = useSearchStore((state) => state.setName);
  const setSearchEmail = useSearchStore((state) => state.setEmail);
  const { token } = useAuthStore();
  const setModified = useUserUpdatedStore((state) => state.setModified);

  const handleUpdate = (e) => {
    e.preventDefault();
    instance
      .post(`/${id}/update`, {
        role: selectedRole,
      })
      .then((res) => {
        setModified(res.data.modified);
      })
      .then(setSearchId(null), setSearchName(''), setSearchEmail(''));
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
                setSelectedRole('USER');
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
                setSelectedRole('ADMIN');
              }}
            />
          </Col>
        </Form.Group>
        <div className="centerAlign">
          {name && selectedRole !== '' ? (
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
