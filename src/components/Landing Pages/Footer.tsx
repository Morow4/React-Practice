import { useState } from "react";
import LVlogo from "../../assets/LVlogo.jpg";
import "../../styles/Footer.css";

function Footer() {
  const [hover, setHover] = useState<string | null>(null);

  const handleMouseOver = (item: string) => setHover(item);
  const handleMouseOut = () => setHover(null);

  return (
    <footer className="footer-container">
      {/* Logo Column with Image */}
      <div className="logo-column">
        <img src={LVlogo} alt="LV Logo" />
      </div>

      {/* About Section */}
      <div className="column">
        <p className="section-title">Company</p>
        <a
          href="#aboutus"
          className={`link-item ${hover === "aboutUs" ? "hover" : ""}`}
          onMouseOver={() => handleMouseOver("aboutUs")}
          onMouseOut={handleMouseOut}
        >
          About Us
        </a>
        <a
          href="#"
          className={`link-item ${hover === "contact" ? "hover" : ""}`}
          onMouseOver={() => handleMouseOver("contact")}
          onMouseOut={handleMouseOut}
        >
          Contact Us
        </a>
        <a
          href="#"
          className={`link-item ${hover === "blogs" ? "hover" : ""}`}
          onMouseOver={() => handleMouseOver("blogs")}
          onMouseOut={handleMouseOut}
        >
          Blogs
        </a>
      </div>

      {/* Help Center Section */}
      <div className="column">
        <p className="section-title">Help Center</p>
        <a
          href="#"
          className={`link-item ${hover === "whyUs" ? "hover" : ""}`}
          onMouseOver={() => handleMouseOver("whyUs")}
          onMouseOut={handleMouseOut}
        >
          Why Us?
        </a>
        <a
          href="#"
          className={`link-item ${hover === "faqs" ? "hover" : ""}`}
          onMouseOver={() => handleMouseOver("faqs")}
          onMouseOut={handleMouseOut}
        >
          FAQs
        </a>
      </div>

      {/* Contact Info Section */}
      <div className="column">
        <p className="section-title">Contact Info</p>
        <div className="contact-item">Email: CMMS@gmail.com</div>
        <div className="contact-item">Location: Apalit, Pampanga</div>
      </div>
    </footer>
  );
}

export default Footer;
