import { useEvents, useEventsActions } from 'store/useEventsStore';
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

export const AddEventNomalModal = () => {
  const addEventValue = useAddEventValue();
  const { setAddEventValue } = useAddEventValueActions();
  const events = useEvents();
  // const { add } = useEventsActions();
  const addEventNomalModal = useAddEventNomalModal();
  const { showAddEventNomalModal } = useModalsActions();
  // console.log(addEventValue);
  const mutation = useAddEvent();

  const getRadioValue = (e) => {
    const value = e.target.id;
    // todo: UserStore에서 user_account_id, name, email 정보 가져오기
    setAddEventValue({ category: value });
  };
  const handleAddEvent = async () => {
    if (addEventValue.category) {
      // todo: api 연결시 요청값은 addEventValue 보내기
      // todo: api 연결시 반환값을 add 액션 함수의 인수로 넣기
      console.log(addEventValue);
      mutation.mutate({
        ...addEventValue,
        id: `11`,
        name: '가나다', // 테스트용 고정값
        email: '001@gamil.com', // 테스트용 고정값
        user_account_id: '001', // 테스트용 고정값
        event_id: `${events.length + 1}`, // 테스트용 고정값
        isDraggable: true,
      });
      // await add({
      //   start: new Date(addEventValue.start),
      //   end: new Date(addEventValue.end),
      //   category: addEventValue.category,
      //   name: '가나다', // 테스트용 고정값
      //   user_account_id: '001', // 테스트용 고정값
      //   event_id: `${events.length + 1}`, // 테스트용 고정값
      //   isDraggable: true,
      // });
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
              <Form.Control
                plaintext
                readOnly
                // todo: UserStore에서 name 가져오기
                defaultValue={'로그인한 유저 이름'}
              />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3 centerAlign">
            <Form.Label column sm="3">
              E-Mail
            </Form.Label>
            <Col sm="5">
              <Form.Control
                plaintext
                readOnly
                // todo: UserStore에서 email 가져오기
                defaultValue={'로그인한 유저 email'}
              />
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
                id="연차"
                name="category"
                type="radio"
                onClick={getRadioValue}
              />
              <Form.Check.Label htmlFor="연차">연차</Form.Check.Label>
              <Form.Check.Input
                id="당직"
                name="category"
                type="radio"
                onClick={getRadioValue}
              />
              <Form.Check.Label htmlFor="당직">당직</Form.Check.Label>
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
