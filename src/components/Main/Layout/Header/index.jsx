import * as S from './style';
import LogoutBtn from 'components/Common/LogoutBtn';

export const Header = () => {
  return (
    <S.Header>
      <S.RoleInfo>관리자</S.RoleInfo>
      <span>
        안녕하세요! <S.Name>User</S.Name>님
      </span>
      {/* <S.RoleInfo>{userStore.role}</S.RoleInfo> */}
      {/* <span>안녕하세요! <S.Name>{userStore.name}</S.Name>님</span> */}
      <LogoutBtn />
    </S.Header>
  );
};
