import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import * as S from './style';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <S.ColRemovePadding
          className="d-none d-lg-block d-xl-block"
          lg={2}
          xl={1.5}
          xxl={1}
        >
          <SideBar />
        </S.ColRemovePadding>
        <Col lg={10} xl={10.5} xxl={11}>
          <Row>
            <Header />
          </Row>
          <S.OutletContainer>
            <Outlet />
          </S.OutletContainer>
        </Col>
      </Row>
    </Container>
  );
};
