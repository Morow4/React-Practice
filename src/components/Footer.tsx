import React from "react";

function Footer() {
  const footerStyles: React.CSSProperties = {
    backgroundColor: "#ffffff",
    color: "#001f3f",
    padding: "20px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "flex-start",
    flexWrap: "wrap",
    borderTop: "1px solid #ccc",
  };

  const columnStyles: React.CSSProperties = {
    flex: "1",
    margin: "0 10px",
    textAlign: "left",
    minWidth: "150px",
  };

  const logoColumnStyles: React.CSSProperties = {
    flex: "1",
    marginRight: "20px",
    textAlign: "left",
    minWidth: "150px",
  };

  const logoStyle: React.CSSProperties = {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginBottom: "10px",
    color: "#001f3f",
  };

  const headingStyles: React.CSSProperties = {
    fontWeight: "bold",
    marginBottom: "10px",
    fontSize: "1.1rem",
  };

  const itemStyles: React.CSSProperties = {
    margin: "5px 0",
    fontSize: "0.9rem",
  };

  return (
    <footer style={footerStyles}>
      <div style={logoColumnStyles}>
        <p style={logoStyle}>Logo</p>
      </div>

      <div style={columnStyles}>
        <br />
        <p>About Us</p>
        <div style={itemStyles}>Contact Us</div>
        <div style={itemStyles}>Blogs</div>
      </div>

      <div style={columnStyles}>
        <p style={headingStyles}>Help Center</p>
        <div style={itemStyles}>Why Us?</div>
        <div style={itemStyles}>FAQs</div>
      </div>

      <div style={columnStyles}>
        <p style={headingStyles}>Contact Info</p>
        <div style={itemStyles}>Phone</div>
        <div style={itemStyles}>Email</div>
        <div style={itemStyles}>Location</div>
      </div>
    </footer>
  );
}

export default Footer;
