import { Container, Row, Col } from "react-bootstrap";

export default function ServicesComp() {
  return (
    <div className="services min-vh-100 d-flex align-items-center" id="services">
      <Container>
        <Row className="mb-5">
          <Col className="text-center">
            <h1 className="fw-bold" data-aos='fade-up'>Services</h1>
            <p data-aos='fade-up' data-aos-delay='200'>Lorem ipsum dolor sit amet consectetur.</p>
          </Col>
        </Row>
        <Row className="row-cols-lg-3 row-cols-md-2 row-cols-1 justify-content-center">
          <Col className="text-center py-5 px-3" data-aos='fade-up' data-aos-delay='400'>
          <i className="fa-solid fa-coins fs-2 mb-4"></i>
          <h5 className="fw-bold">Harga Terjangkau</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="text-center py-5 px-3" data-aos='fade-up' data-aos-delay='600'>
          <i className="fa-solid fa-thumbs-up fs-2 mb-4"></i>
          <h5 className="fw-bold">Harga Terjangkau</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
          <Col className="text-center py-5 px-3" data-aos='fade-up' data-aos-delay='800'>
          <i className="fa-solid fa-shield-halved fs-2 mb-4"></i>
          <h5 className="fw-bold">Bersetifikasi</h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
