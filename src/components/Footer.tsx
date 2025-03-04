import React, { useState } from "react";
import LVlogo from "../assets/LVlogo.jpg";

function Footer() {
  const [hover, setHover] = useState<string | null>(null);

  const footerStyles: React.CSSProperties = {
    backgroundColor: "#001f3f",
    color: "#ffffff",
    padding: "40px 20px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    borderTop: "2px solid #ffffff",
  };

  const columnStyles: React.CSSProperties = {
    flex: "1 1 200px",
    margin: "0 15px",
    textAlign: "left",
    paddingBottom: "20px",
  };

  const logoColumnStyles: React.CSSProperties = {
    flex: "1 1 250px",
    marginRight: "20px",
    textAlign: "left",
  };

  const logoStyle: React.CSSProperties = {
    width: "120px",
    height: "120px",
    borderRadius: "50%",
    objectFit: "cover",
  };

  const headingStyles: React.CSSProperties = {
    fontWeight: "bold",
    marginBottom: "15px",
    fontSize: "1.2rem",
    color: "#f1f1f1",
  };

  const itemStyles: React.CSSProperties = {
    margin: "8px 0",
    fontSize: "1rem",
    color: "#d1d1d1",
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
