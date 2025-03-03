import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import LVbuilding from "../assets/LVbuilding.jpg"; // Import the image

function LandingPage() {
  const navigate = useNavigate(); // Hook for navigation

  const styles: React.CSSProperties = {
    textAlign: "center",
    backgroundImage: `url(${LVbuilding})`, // Set the background image
    backgroundSize: "cover", // Cover the entire viewport
    backgroundPosition: "center", // Center the background image
    backgroundRepeat: "no-repeat", // Prevent repeating
    minHeight: "100vh", // Ensure the background covers the full viewport
    color: "white",
    display: "flex",
    flexDirection: "column", // Flex column direction
    justifyContent: "flex-start", // Align content from top
  };

  const heroSectionStyles: React.CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center", // Center the content horizontally
    justifyContent: "center", // Center the content vertically
    textAlign: "center", // Ensures text is centered
    flexGrow: 1, // Make the hero section take as much space as possible
    padding: "20px", // Some padding around the content
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add a dark overlay for better text visibility
    width: "100%", // Ensure it covers the full width
  };

  const heroTitleStyles: React.CSSProperties = {
    fontSize: "2.5rem",
    marginBottom: "10px",
    textAlign: "center", // Align title to center
  };

  const heroSubtitleStyles: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 300,
    marginBottom: "20px",
    textAlign: "center", // Align subtitle to center
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
    <div style={styles}>
      <div style={heroSectionStyles}>
        <h1 style={heroTitleStyles}>
          COMPUTERIZED MAINTENANCE <br /> MANAGEMENT SYSTEM
        </h1>
        <h2> with Facility Scheduling</h2>
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
      {/* <Footer /> {} */}
    </div>
  );
}

export default LandingPage;
