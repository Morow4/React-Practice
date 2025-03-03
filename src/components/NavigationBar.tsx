import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import LVlogo from "../assets/LVlogo.jpg"; // Import the logo

function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" style={styles.navbar}>
      <Container>
        {/* Logo and Branding */}
        <Navbar.Brand href="#logo" style={styles.brand}>
          <img
            src={LVlogo} // Use the imported logo here
            alt="La Verdad Logo"
            style={styles.logo}
          />
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
            <Nav.Link href="#about" style={styles.navLink}>
              About Us
            </Nav.Link>
            <Nav.Link href="#features" style={styles.navLink}>
              Features
            </Nav.Link>
          </Nav>

          {/* Right-aligned Register and Login Buttons */}
          <Nav className="ms-auto" style={styles.authButtons}>
            <Nav.Link
              as={Link}
              to="/registration"
              style={{ ...styles.navLink, ...styles.registerLink }}
            >
              <button
                className="btn btn-outline-primary"
                style={styles.registerButton}
              >
                Register
              </button>
            </Nav.Link>
            {/* Inline separator */}
            <span style={styles.separator}>|</span>
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
    fontWeight: "normal", // Removed bold from brand
    fontSize: "20px",
    pointerEvents: "none" as "none", // Correctly typed
    display: "flex", // Use flexbox to align logo and text
    alignItems: "center", // Vertically center the logo and text
    paddingLeft: "0",
  },
  logo: {
    width: "60px", // Increased size of the logo (adjust as needed)
    height: "60px",
    marginRight: "25px",
  },
  navLinks: {
    fontSize: "16px",
  },
  navLink: {
    color: "#001f3d",
    fontWeight: "normal", // Removed bold from text
    marginRight: "20px", // Added margin to space out nav items
  },
  registerLink: {
    textDecoration: "underline", // Added underline to Register link
    fontWeight: "normal", // Removed bold from Register text
  },
  registerButton: {
    fontWeight: "600",
    padding: "8px 20px",
    border: "none", // Removes the border
    borderRadius: "0", // Optional: Removes any border-radius, if desired
    display: "inline-block", // Ensures it aligns properly
    verticalAlign: "middle", // Aligns the button in line with others
    lineHeight: "normal", // Fixes the vertical misalignment issue
    background: "transparent", // Ensures it has no background color
    cursor: "pointer", // Makes it appear clickable
    textDecoration: "underline", // Optional: Keeps it underlined if needed
  },
  separator: {
    color: "#001f3d",
    fontWeight: "normal",
    fontSize: "18px",
    margin: "0 8px", // Slightly smaller margin between buttons
  },
  authButton: {
    fontWeight: "600",
    padding: "8px 20px",
    display: "inline-block",
    verticalAlign: "middle",
    lineHeight: "normal",
  },
  authButtons: {
    display: "flex", // Align buttons in a row
    alignItems: "center", // Align vertically in the middle
  },
};

export default NavigationBar;
