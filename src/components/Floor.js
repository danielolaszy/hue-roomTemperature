import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Temperature from "./Temperature";

const Floor = ({ floor, id }) => {
  return (
    <Col md="auto" className="text-light text-center primary my-3 p-5">
      <h4>{floor}</h4>
      <h1 className="display-4">
        <Temperature floor={floor} id={id} />
      </h1>
    </Col>
  );
};

export default Floor;
