import { Container, Row, Col } from "react-bootstrap";

function FooterComp() {
  return (
    <div className="footer pb-3 pt-4">
      <Container>
        <Row>
          <Col>
            <h3 className="fw-bold text-white">Ngode.</h3>
          </Col>
          <Col className="text-white fs-1 text-end">
          <i class="fa-brands fa-facebook mx-lg-3 mx-2"></i> 
          <i class="fa-brands fa-twitter mx-lg-3 mx-2"></i> 
          <i class="fa-brands fa-linkedin mx-lg-3 mx-2"></i> 
          </Col>
        </Row>
        <Row>
            <Col>
            <p className="text-center text-white-50">&copy; Copyright by Rzk 2023, All Right Resrved.</p>
            </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FooterComp;
