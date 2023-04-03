import { useDeleteEventModal, useModalsActions } from 'store/useModalStore';
import { useDeleteEventValue } from 'store/useDeleteEventValueStore';
import { useDeleteEventValueActions } from 'store/useDeleteEventValueStore';
import { Button, Modal } from 'react-bootstrap';
import * as S from './style';
import { useDeleteEvent } from 'util/hooks/useDeleteEvent';

export const DeleteEventModal = () => {
  const deleteEventModal = useDeleteEventModal();
  const { showDeleteEventModal } = useModalsActions();
  const deleteEventValue = useDeleteEventValue();
  const { resetDeleteEventValue } = useDeleteEventValueActions();
  console.log(deleteEventValue);
  const del = useDeleteEvent();

  const handleDeleteEvent = async () => {
    del.mutate(deleteEventValue);
    // 완료되면 모달 창 닫기
    await showDeleteEventModal(false);
    // 완료되면 deleteEventValue 값 초기화
    await resetDeleteEventValue();
  };

  return (
    <Modal
      show={deleteEventModal}
      onHide={() => showDeleteEventModal(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">일정 삭제</Modal.Title>
      </Modal.Header>
      <S.ModalBody>정말 삭제하시겠습니까?</S.ModalBody>
      <Modal.Footer className="centerAlign">
        <S.Button onClick={handleDeleteEvent}>삭제</S.Button>
        <Button
          className="btn-secondary"
          onClick={() => showDeleteEventModal(false)}
        >
          취소
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
