import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Container>
      <Nav className="justify-content-center" activeKey="/home">
        <Nav.Item>
          <Nav.Link>
            <Link to="/">Dashboard</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/groundfloor">Ground Floor</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/secondfloor">Second Floor</Link>
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link>
            <Link to="/garden">Garden</Link>
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </Container>
  );
};
export default Navigation;
