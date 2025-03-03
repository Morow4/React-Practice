"use client";

import { useState, useEffect } from "react";
import SideBar from "./SideBar"; // Import the SideBar component
import SearchFilter from "./SearchFilter";
import Calendar from "./ui/Calendar";

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open/close state
  const name = "John Doe"; // Replace with dynamic user data if available

  // Adjust sidebar state based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Collapse sidebar by default on smaller screens (below 768px)
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call once initially to set correct state on page load
    handleResize();

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={styles.container}>
      {/* Sidebar component with visibility controlled by `isSidebarOpen` */}
      <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

      {/* Main Content */}
      <div
        style={{
          ...styles.mainContent,
          marginLeft: isSidebarOpen
            ? "220px"
            : window.innerWidth <= 768
            ? "0" // For small screens, the sidebar is collapsed, no margin required
            : "70px", // For larger screens, use collapsed width of the sidebar
        }}
      >
        {/* ✅ Search & Filter Component (Placed Above or Below Dashboard Title based on screen size) */}
        <div
          style={{
            ...styles.filterContainer,
            position: window.innerWidth <= 768 ? "relative" : "static", // Adjust position based on screen size
            marginTop: window.innerWidth <= 768 ? "100px" : "0", // Provide some spacing when it's on top of the sidebar
            zIndex: 1, 
          }}
        >
          <SearchFilter />
        </div>

        {/* ✅ Dashboard Title & Welcome Message */}
        <div style={styles.header}>
          <br />
          <h1 style={styles.title}>Dashboard</h1>
          <p style={styles.welcomeText}>
            Hi <b>{name}</b>, welcome to La Verdad Dashboard
          </p>
        </div>

        {/* ✅ Calendar Component */}
        <Calendar />
      </div>
    </div>
  );
};

// Styling for the Dashboard layout
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: "flex",
    height: "100vh",
    overflow: "hidden",
  },
  mainContent: {
    flexGrow: 1,
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    transition: "margin-left 0.3s ease",
    overflowY: "auto" as "auto", // Explicitly typing `overflowY` to avoid type error
    height: "100vh",
    background: "white",
  },
  filterContainer: {
    marginBottom: "20px", // Adds spacing below the filter
    zIndex: 1, // Push it above the sidebar when collapsed
  },
  header: {
    display: "flex",
    flexDirection: "column", // Explicitly defining type for flexDirection
    gap: "5px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  welcomeText: {
    fontSize: "18px",
  },
  toggleButton: {
    padding: "10px",
    backgroundColor: "#3498db",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginBottom: "20px",
  },
};

export default Dashboard;
