import * as S from './style';
import LogoutBtn from 'components/Common/LogoutBtn';
import useLoggedUserStore from 'store/useLoggedUserStore';

export const Header = () => {
  const { role, name } = useLoggedUserStore();
  return (
    <S.Header>
      {role === 'ADMIN' ? (
        <S.RoleInfo color="#ffafa1">관리자</S.RoleInfo>
      ) : (
        <S.RoleInfo color="#e7e7e7">일반</S.RoleInfo>
      )}
      <span>
        안녕하세요! <S.Name>{name}</S.Name>님
      </span>
      {/* <S.RoleInfo>{userStore.role}</S.RoleInfo> */}
      {/* <span>안녕하세요! <S.Name>{userStore.name}</S.Name>님</span> */}
      <LogoutBtn />
    </S.Header>
  );
};
