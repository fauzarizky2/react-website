import { Container, Row, Col } from "react-bootstrap";

const HeroComp = () => {
  return (
    <div className="hero min-vh-100 w-100">
      <Container>
        <Row>
          <Col className="text-white text-center">
            <h1>Mari Bersantai Sebentar</h1>
            <p className="text-white-50">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus, sequi.</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeroComp;
