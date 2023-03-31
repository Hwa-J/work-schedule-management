import { MainCalendar } from 'components/Main/MainCalendar';
import { AddEventNomalModal } from 'components/Modals/AddEventNomalModal';
import { DeleteEventModal } from 'components/Modals/DeleteEventModal';

const Main = () => {
  return (
    <div>
      <MainCalendar />
      {/* 모달창 */}
      <AddEventNomalModal />
      <DeleteEventModal />
    </div>
  );
};

export default Main;
