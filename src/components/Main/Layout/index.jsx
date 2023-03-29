import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import * as S from './style';
import { Header } from './Header';
import { SideBar } from './SideBar';

export const Layout = () => {
  return (
    <Container fluid>
      <Row>
        <S.ColRemovePadding className="d-none d-lg-block d-xl-block" lg={2}>
          <SideBar />
        </S.ColRemovePadding>
        <Col lg={10}>
          <Row>
            <Header />
          </Row>
          <S.RowFilledToMaxHeight>
            <Outlet />
          </S.RowFilledToMaxHeight>
        </Col>
      </Row>
      {/* 다른 스타일 레이아웃 */}
      {/* <Row lg={12}>
        <Header />
      </Row>
      <Row>
        <Col className="d-none d-lg-block d-xl-block" lg={2}>
          <SideBar />
        </Col>
        <Col lg={10}>
          <Outlet />
        </Col>
      </Row> */}
    </Container>
  );
};
