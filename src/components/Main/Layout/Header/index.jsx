import { useState } from 'react';
import useLoggedUserStore from 'store/useLoggedUserStore';
import { SideBar } from '../SideBar';
import LogoutBtn from 'components/Common/LogoutBtn';
import { Col } from 'react-bootstrap';
import { GiHamburgerMenu } from 'react-icons/gi';
import * as S from './style';

export const Header = () => {
  const { role, name } = useLoggedUserStore();
  const [isShow, setIsShow] = useState(false);

  return (
    <header>
      <S.HeaderRow>
        <Col className="d-block d-lg-none d-xl-none">
          <GiHamburgerMenu onClick={() => setIsShow(!isShow)} />
          <S.SideBarBackground
            onClick={() => setIsShow(!isShow)}
            className={isShow ? 'show' : ''}
          >
            <S.HeaderSideBarContainer>
              <SideBar />
            </S.HeaderSideBarContainer>
            <S.CloseSvg />
          </S.SideBarBackground>
        </Col>
        <Col>
          <S.UserInfoContainer>
            {role === 'ADMIN' ? (
              <S.RoleInfo color="#ffafa1">관리자</S.RoleInfo>
            ) : (
              <S.RoleInfo color="#e7e7e7">일반</S.RoleInfo>
            )}
            <span>
              안녕하세요! <S.Name>{name}</S.Name>님
            </span>
            <LogoutBtn />
          </S.UserInfoContainer>
        </Col>
      </S.HeaderRow>
    </header>
  );
};
