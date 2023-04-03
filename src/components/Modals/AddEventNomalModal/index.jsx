import { useAddEventNomalModal, useModalsActions } from 'store/useModalStore';
import {
  useAddEventValue,
  useAddEventValueActions,
} from 'store/useAddEventValueStore';
import {
  getDateToDashForm,
  getPrevDateToDashForm,
} from 'util/getDateToCustomForm';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import * as S from '../AddEventNomalModal/style';
import { useAddEvent } from 'util/hooks/useAddEvent';

import useLoggedUserStore from 'store/useLoggedUserStore';

export const AddEventNomalModal = () => {
  const addEventValue = useAddEventValue();
  const { setAddEventValue } = useAddEventValueActions();
  const addEventNomalModal = useAddEventNomalModal();
  const { showAddEventNomalModal } = useModalsActions();
  const add = useAddEvent();
  const { name, email, id } = useLoggedUserStore();
  const getRadioValue = (e) => {
    const value = e.target.id;
    setAddEventValue({ category: value });
  };
  const handleAddEvent = async () => {
    if (addEventValue.category) {
      add.mutate({
        id,
        addEventValue: {
          ...addEventValue,
        },
      });
      await showAddEventNomalModal(false);
    } else {
      alert('일정 종류를 선택해 주세요.');
    }
  };

  return (
    <Modal
      show={addEventNomalModal}
      onHide={() => showAddEventNomalModal(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">일정 등록</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <S.ModalForm>
          <Form.Group as={Row} className="mb-3 centerAlign">
            <Form.Label column sm="3">
              이름
            </Form.Label>
            <Col sm="5">
              <Form.Control plaintext readOnly defaultValue={name} />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 centerAlign">
            <Form.Label column sm="3">
              E-Mail
            </Form.Label>
            <Col sm="5">
              <Form.Control plaintext readOnly defaultValue={email} />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 centerAlign">
            <Form.Label column sm="3">
              시작 날짜
            </Form.Label>
            <Col sm="5">
              <Form.Control
                plaintext
                readOnly
                defaultValue={getDateToDashForm(addEventValue.start)}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 centerAlign">
            <Form.Label column sm="3">
              종료 날짜
            </Form.Label>
            <Col sm="5">
              <Form.Control
                plaintext
                readOnly
                defaultValue={getPrevDateToDashForm(addEventValue.end)}
              />
            </Col>
          </Form.Group>

          <Form.Group as={Row} className="mb-3 centerAlign">
            <Form.Label as="legend" column sm="3">
              일정 종류
            </Form.Label>
            <Col sm="5">
              <Form.Check.Input
                id="LEAVE"
                name="category"
                type="radio"
                onClick={getRadioValue}
              />
              <Form.Check.Label htmlFor="LEAVE">연차</Form.Check.Label>
              <Form.Check.Input
                id="DUTY"
                name="category"
                type="radio"
                onClick={getRadioValue}
              />
              <Form.Check.Label htmlFor="DUTY">당직</Form.Check.Label>
            </Col>
          </Form.Group>
        </S.ModalForm>
      </Modal.Body>
      <Modal.Footer className="centerAlign">
        <S.StyledButton onClick={handleAddEvent}>등록</S.StyledButton>
        <Button
          className="btn-secondary"
          onClick={() => showAddEventNomalModal(false)}
        >
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
