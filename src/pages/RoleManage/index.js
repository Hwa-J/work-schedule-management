import { FormContainer } from 'components/Common/FormContainer';
import { RoleManageLayout } from './style';
import RoleManageForm from 'components/RoleManageForm';
import UserUpdatedModal from 'components/Modals/UserUpdatedModal';

const RoleManage = () => {
  return (
    <RoleManageLayout className="centerAlign">
      <FormContainer width="600px">
        <RoleManageForm />
      </FormContainer>
      <UserUpdatedModal />
    </RoleManageLayout>
  );
};

export default RoleManage;
