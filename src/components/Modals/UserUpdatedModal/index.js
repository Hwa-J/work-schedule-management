import { Button, Modal } from 'react-bootstrap';
import useUserUpdatedStore from 'store/useUserUpdatedStore';

const UserUpdatedModal = () => {
  const { modified } = useUserUpdatedStore();
  const setModified = useUserUpdatedStore((state) => state.setModified);

  const handelClick = (e) => {
    e.preventDefault();
    setModified(false);
  };

  return (
    <Modal
      show={modified}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body className="centerAlign">
        <Modal.Title>업데이트 완료</Modal.Title>
      </Modal.Body>
      <Modal.Footer className="centerAlign">
        <Button onClick={handelClick}>확인</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserUpdatedModal;
