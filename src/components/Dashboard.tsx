"use client";

import { useState, CSSProperties } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import SideBar from "./SideBar"; // ✅ Import Sidebar Component

const Dashboard: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const name = "John Doe"; // Replace with dynamic user data if available

  return (
    <div style={styles.container}>
      {/* ✅ Use Only the Sidebar Component (No Extra Div) */}
      <SideBar />

      {/* Main Content - Adjusts to Sidebar */}
      <div
        style={{
          ...styles.mainContent,
          marginLeft: isSidebarOpen ? "220px" : "70px", // Matches Sidebar Width
        }}
      >
        {/* Dashboard Title & Welcome Message */}
        <div style={styles.header}>
          <h1 style={styles.title}>Dashboard</h1>
          <div style={styles.welcomeContainer}>
            <p style={styles.welcomeText}>
              Hi {name}, welcome to La Verdad Dashboard
            </p>
            <button style={styles.scheduleButton}>Schedule a Facility</button>
          </div>
        </div>

        {/* Calendar */}
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          events={[
            { title: "Meeting", date: "2025-03-10" },
            { title: "Project Deadline", date: "2025-03-15" },
            { title: "Team Outing", date: "2025-03-20" },
          ]}
          eventContent={(eventInfo) => (
            <div style={styles.calendarEvent}>{eventInfo.event.title}</div>
          )}
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
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
    overflowY: "auto",
    height: "100vh",
    background: "white",
  },
  header: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },
  title: {
    fontSize: "24px",
    fontWeight: "bold",
  },
  welcomeContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  welcomeText: {
    fontSize: "18px",
  },
  scheduleButton: {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "10px 15px",
    fontSize: "16px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background 0.3s ease",
  },
  calendarEvent: {
    backgroundColor: "#3498db",
    color: "white",
    borderRadius: "5px",
    padding: "5px",
    fontSize: "14px",
    textAlign: "center",
  },
};

export default Dashboard;
