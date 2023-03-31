import { FormContainer } from 'components/Common/FormContainer';
import { RoleManageLayout } from './style';
import RoleManageForm from 'components/RoleManageForm';

const RoleManage = () => {
  return (
    <RoleManageLayout className="centerAlign">
      <FormContainer width="600px">
        <RoleManageForm />
      </FormContainer>
    </RoleManageLayout>
  );
};

export default RoleManage;
