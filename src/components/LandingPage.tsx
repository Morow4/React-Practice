import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function LandingPage() {
  const styles: React.CSSProperties = {
    textAlign: "center",
    background: "linear-gradient(135deg, #001f3f, #004080)", // Navy blue gradient
    minHeight: "100vh", // Changed from height to minHeight for proper footer placement
    color: "white",
    display: "flex",
    flexDirection: "column",
  };

  const heroSectionStyles: React.CSSProperties = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    flexGrow: 1, // Ensures hero section takes available space
  };

  const heroTitleStyles: React.CSSProperties = {
    fontSize: "2.5rem",
    marginBottom: "10px",
  };

  const heroSubtitleStyles: React.CSSProperties = {
    fontSize: "1.2rem",
    fontWeight: 300,
    marginBottom: "20px",
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
      <NavigationBar />
      <div style={heroSectionStyles}>
        <h1 style={heroTitleStyles}>La Verdad Christian College - Apalit</h1>
        <h4 style={heroSubtitleStyles}>
          Computerized Maintenance Management System With Facility Scheduling
        </h4>
        <button
          style={buttonStyles}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = "#f1f1f1";
            e.currentTarget.style.color = "#388e3c";
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = "white";
            e.currentTarget.style.color = "#004080";
          }}
        >
          Get Started
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default LandingPage;
