import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import AboutUs from "./AboutUs";
import Features from "./Features";
import "../../styles/LandingPage.css";

function LandingPage() {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero Section (Landing Page) */}
      <div className="landing-page">
        <div className="hero-section">
          <h1 className="hero-title">
            COMPUTERIZED MAINTENANCE <br /> MANAGEMENT SYSTEM
          </h1>
          <h2 className="hero-subtitle">with Facility Scheduling</h2>
          <br />
          <button
            className="button"
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
        <Features></Features>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default LandingPage;
