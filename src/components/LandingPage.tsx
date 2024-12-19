import NavigationBar from "./NavigationBar";
import Footer from "./Footer";

function LandingPage() {
  const styles: React.CSSProperties = {
    textAlign: "center",
    background: "linear-gradient(135deg, #001f3f, #004080)",
    minHeight: "100vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
  };

  const heroSectionStyles: React.CSSProperties = {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end", // Aligning content to the right
    justifyContent: "center", // Vertically center the content
    flexGrow: 1,
    paddingRight: "20px", // Add some space from the right edge
  };

  const heroTitleStyles: React.CSSProperties = {
    fontSize: "2.5rem",
    marginBottom: "10px",
    textAlign: "right", // Aligning the title to the right
  };

  const heroSubtitleStyles: React.CSSProperties = {
    fontSize: "1.5rem",
    fontWeight: 300,
    marginBottom: "20px",
    textAlign: "right", // Aligning the subtitle to the right
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
        <h2 style={heroSubtitleStyles}>
          Computerized Maintenance Management <br /> System With Facility
          Scheduling
        </h2>
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
