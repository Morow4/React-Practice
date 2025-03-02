import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#logo">CMMS</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* Link the Home Nav.Link to the LandingPage */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
          </Nav>
          {/* Add Login button on the right side */}
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/login" className="btn btn-primary">
              Login
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
