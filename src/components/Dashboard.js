import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Floor from "./Floor";

// Sensor 1 id 6 Ground floor
// Sensor 2 id 13 1st floor
// Sensor 3 id 30 2nd Floor Sensor
// Sensor 4 id 72 Kitchen

const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-light text-center my-3">Dashboard</h1>
        </Col>
      </Row>
      <Row className="justify-contcent-center">
        <Col md={6} className="mx-auto">
          <Floor floor="2nd Floor" id={30} />
          <Floor floor="1st Floor" id={13} />
          <Floor floor="Ground Floor" id={6} />
          <Floor floor="Kitchen" id={72} />
          <Floor floor="Outdoor" id={107} />
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
