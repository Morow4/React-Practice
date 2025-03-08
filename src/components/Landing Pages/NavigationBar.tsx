import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LVlogo from "../../assets/LVlogo.jpg";

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={styles.navbar}>
      <Container>
        {/* Logo and Branding */}
        <Navbar.Brand href="#logo" style={styles.brand}>
          <img src={LVlogo} alt="La Verdad Logo" style={styles.logo} />
          La Verdad Christian College
        </Navbar.Brand>

        {/* Toggle Button for Mobile Screens */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        {/* Collapsing Navbar Items */}
        <Navbar.Collapse id="responsive-navbar-nav">
          {/* Center-aligned Navigation Links */}
          <Nav className="mx-auto" style={styles.navLinks}>
            <Nav.Link as={Link} to="/home" style={styles.navLink}>
              Home
            </Nav.Link>
            <Nav.Link href="#aboutus" style={styles.navLink}>
              About Us
            </Nav.Link>
            <Nav.Link href="#features" style={styles.navLink}>
              Features
            </Nav.Link>
          </Nav>

          {/* Right-aligned login button*/}
          <Nav className="ms-auto" style={styles.authButtons}>
            <Nav.Link as={Link} to="/login" style={styles.navLink}>
              <button className="btn btn-primary" style={styles.authButton}>
                Login
              </button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

const styles = {
  navbar: {
    backgroundColor: "white",
    borderBottom: "1px solid #e0e0e0",
  },
  brand: {
    color: "#001f3d",
    fontWeight: "normal",
    fontSize: "20px",
    pointerEvents: "none" as "none",
    display: "flex",
    alignItems: "center",
    paddingLeft: "0",
  },
  logo: {
    width: "60px",
    height: "60px",
    marginRight: "25px",
  },
  navLinks: {
    fontSize: "16px",
  },
  navLink: {
    color: "#001f3d",
    fontWeight: "normal",
    marginRight: "20px",
    textDecoration: "none",
    transition: "text-decoration 0.3s ease-in-out",
  },
  navLinkHover: {
    textDecoration: "underline",
  },
  authButton: {
    fontWeight: "500",
    padding: "8px 20px",
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: "normal",
  },
  authButtons: {
    display: "flex",
    alignItems: "center",
    gap: "0px",
  },
};

// Inject CSS for hover effect
const styleTag = document.createElement("style");
styleTag.innerHTML = `
  .nav-link:hover {
    text-decoration: underline !important;
  }
`;
document.head.appendChild(styleTag);

export default NavigationBar;
