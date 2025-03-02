import React, { useState } from "react";
import LVlogo from "../assets/LVlogo.jpg"; // Adjust the import path to your image

function Footer() {
  const [hover, setHover] = useState<string | null>(null);

  // Footer container styles
  const footerStyles: React.CSSProperties = {
    backgroundColor: "#001f3f", // Deep blue background for a professional look
    color: "#ffffff", // White text color for better readability
    padding: "40px 20px", // More padding for breathing space
    display: "flex",
    flexDirection: "row", // Align columns horizontally
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderTop: "2px solid #ffffff",
  };

  // Column styles
  const columnStyles: React.CSSProperties = {
    flex: "1 1 200px", // Make columns flexible with a minimum width of 200px
    margin: "0 15px",
    textAlign: "left",
    paddingBottom: "20px",
  };

  // Logo column styles
  const logoColumnStyles: React.CSSProperties = {
    flex: "1 1 250px", // Larger size for logo section
    marginRight: "20px",
    textAlign: "left",
  };

  // Image styles to make it circular and larger
  const logoStyle: React.CSSProperties = {
    width: "120px", // Increase the size of the logo
    height: "120px", // Make the height equal to the width to keep it square
    borderRadius: "50%", // Make it circular
    objectFit: "cover", // Ensure the image covers the circular area without distortion
  };

  // Heading styles
  const headingStyles: React.CSSProperties = {
    fontWeight: "bold",
    marginBottom: "15px",
    fontSize: "1.2rem",
    color: "#f1f1f1", // Lighter heading color
  };

  // Item link styles
  const itemStyles: React.CSSProperties = {
    margin: "8px 0",
    fontSize: "1rem",
    color: "#d1d1d1", // Light gray text color
    textDecoration: "none",
    transition: "all 0.3s ease",
  };

  const handleMouseOver = (item: string) => setHover(item);
  const handleMouseOut = () => setHover(null);

  return (
    <footer style={footerStyles}>
      {/* Logo Column with Image */}
      <div style={logoColumnStyles}>
        <img src={LVlogo} alt="LV Logo" style={logoStyle} />
      </div>

      {/* About Section */}
      <div style={columnStyles}>
        <p style={headingStyles}>Company</p>
        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "aboutUs" ? "underline" : "none",
          }}
          onMouseOver={() => handleMouseOver("aboutUs")}
          onMouseOut={handleMouseOut}
        >
          About Us
        </a>
        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "contact" ? "underline" : "none",
          }}
          onMouseOver={() => handleMouseOver("contact")}
          onMouseOut={handleMouseOut}
        >
          <br />
          Contact Us
        </a>

        <br />

        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "blogs" ? "underline" : "none",
          }}
          onMouseOver={() => handleMouseOver("blogs")}
          onMouseOut={handleMouseOut}
        >
          Blogs
        </a>
      </div>

      {/* Help Center Section */}
      <div style={columnStyles}>
        <p style={headingStyles}>Help Center</p>
        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "whyUs" ? "underline" : "none",
          }}
          onMouseOver={() => handleMouseOver("whyUs")}
          onMouseOut={handleMouseOut}
        >
          Why Us?
        </a>

        <br />

        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "faqs" ? "underline" : "none",
          }}
          onMouseOver={() => handleMouseOver("faqs")}
          onMouseOut={handleMouseOut}
        >
          FAQs
        </a>
      </div>

      {/* Contact Info Section */}
      <div style={columnStyles}>
        <p style={headingStyles}>Contact Info</p>
        <div style={itemStyles}>Email: CMMS@gmail.com</div>
        <div style={itemStyles}>Location: Apalit, Pampanga</div>
      </div>
    </footer>
  );
}

export default Footer;
