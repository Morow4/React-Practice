import React, { useState } from "react";

function Footer() {
  const [hover, setHover] = useState<string | null>(null);

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

  const handleMouseOver = (item: string) => setHover(item);
  const handleMouseOut = () => setHover(null);

  return (
    <footer style={footerStyles}>
      <div style={logoColumnStyles}>
        <p style={logoStyle}>Logo</p>
      </div>

      <div style={columnStyles}>
        <br />
        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "aboutUs" ? "underline" : "none",
            color: "inherit",
          }}
          onMouseOver={() => handleMouseOver("aboutUs")}
          onMouseOut={handleMouseOut}
        >
          About Us
        </a>
        <br />
        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "contact" ? "underline" : "none",
            color: "inherit",
          }}
          onMouseOver={() => handleMouseOver("contact")}
          onMouseOut={handleMouseOut}
        >
          Contact Us
        </a>{" "}
        <br />
        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "blogs" ? "underline" : "none",
            color: "inherit",
          }}
          onMouseOver={() => handleMouseOver("blogs")}
          onMouseOut={handleMouseOut}
        >
          Blogs
        </a>
      </div>

      <div style={columnStyles}>
        <p style={headingStyles}>Help Center</p>
        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "whyUs" ? "underline" : "none",
            color: "inherit",
          }}
          onMouseOver={() => handleMouseOver("whyUs")}
          onMouseOut={handleMouseOut}
        >
          Why Us?
        </a>{" "}
        <br />
        <a
          href="#"
          style={{
            ...itemStyles,
            textDecoration: hover === "faqs" ? "underline" : "none",
            color: "inherit",
          }}
          onMouseOver={() => handleMouseOver("faqs")}
          onMouseOut={handleMouseOut}
        >
          FAQs
        </a>
      </div>

      <div style={columnStyles}>
        <p style={headingStyles}>Contact Info</p>
        <div style={itemStyles}>Phone: 09** *** ****</div>
        <div style={itemStyles}>Email: CMMS@gmail.com</div>
        <div style={itemStyles}>Location: Apalit, Pampanga</div>
      </div>
    </footer>
  );
}

export default Footer;
