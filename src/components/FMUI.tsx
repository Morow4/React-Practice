"use client";

import { useState, useEffect } from "react";
import SideBar from "./ui/SideBar";
import SearchFilter from "./ui/SearchFilter";
import FacilityManagement from "./FacilityManagement";

const FMUI: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar open/close state
  // const name = "John Doe";

  useEffect(() => {
    const handleResize = () => {
      // Collapse sidebar by default on smaller screens (below 768px)
      if (window.innerWidth <= 768) {
        setIsSidebarOpen(false);
      } else {
        setIsSidebarOpen(true);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

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
            ? "0"
            : "70px",
        }}
      >
        {/* ✅ Search & Filter Component (Placed Above or Below Dashboard Title based on screen size) */}
        <div
          style={{
            ...styles.filterContainer,
            position: window.innerWidth <= 768 ? "relative" : "static",
            marginTop: window.innerWidth <= 768 ? "100px" : "0",
            zIndex: 1,
          }}
        >
          <SearchFilter />
        </div>

        {/* ✅ Dashboard Title & Welcome Message */}
        <div style={styles.header}>
          <br />
        </div>

        {/* ✅ Calendar Component */}
        <FacilityManagement />
      </div>
    </div>
  );
};

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
    overflowY: "auto" as "auto",
    height: "100vh",
    background: "white",
  },
  filterContainer: {
    marginBottom: "20px",
    zIndex: 1,
  },
  header: {
    display: "flex",
    flexDirection: "column",
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

export default FMUI;
