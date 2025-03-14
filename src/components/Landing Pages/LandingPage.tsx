import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Features from "./Features";
import LVbuilding from "../../assets/LVbuilding.jpg";

function LandingPage() {
  const navigate = useNavigate();
  const styles: React.CSSProperties = {
    textAlign: "center",
    backgroundImage: `url(${LVbuilding})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  };

  const heroSectionStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    flexGrow: 1,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    width: "100%",
  };

  const heroTitleStyles: React.CSSProperties = {
    fontSize: "2.5rem",
    marginBottom: "10px",
    textAlign: "center",
  };

  const heroSubtitleStyles: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 300,
    marginBottom: "20px",
    textAlign: "center",
  };

  const buttonStyles: React.CSSProperties = {
    padding: "10px 20px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#004080",
    backgroundColor: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  };

  return (
    <div>
      {/* Hero Section (Landing Page) */}
      <div style={styles}>
        <div style={heroSectionStyles}>
          <h1 style={heroTitleStyles}>
            COMPUTERIZED MAINTENANCE <br /> MANAGEMENT SYSTEM
          </h1>
          <h2 style={heroSubtitleStyles}>with Facility Scheduling</h2>
          <br />
          <button
            style={buttonStyles}
            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor = "#f1f1f1";
              e.currentTarget.style.color = "black";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor = "white";
              e.currentTarget.style.color = "#004080";
            }}
            onClick={() => navigate("/registration")}
          >
            Get Started
          </button>
        </div>
      </div>

      <div id="aboutus">
        <AboutUs />
      </div>

      <div id="features">
        <Features />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default LandingPage;
