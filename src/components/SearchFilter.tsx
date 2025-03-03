"use client";

import { useState, CSSProperties } from "react";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";

const SearchFilter = () => {
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Filter states
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [venue, setVenue] = useState("");
  const [capacity, setCapacity] = useState("");
  const [status, setStatus] = useState("");

  // Handle filter logic
  const handleFilter = () => {
    console.log({ search, date, time, venue, capacity, status });
    setIsModalOpen(false);
  };

  return (
    <>
      {/* 🔍 Search Bar UI */}
      <div style={styles.container}>
        <FaSearch style={styles.icon} />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={styles.input}
        />
        <button style={styles.button} onClick={() => setIsModalOpen(true)}>
          <FaFilter style={styles.buttonIcon} /> Filter
        </button>
      </div>

      {/* 📌 Modal UI */}
      {isModalOpen && (
        <div style={styles.modalOverlay} onClick={() => setIsModalOpen(false)}>
          <div style={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              style={styles.closeButton}
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
            <h2 style={styles.modalTitle}>Filter Options</h2>

            <label style={styles.label}>Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              style={styles.input}
            />

            <label style={styles.label}>Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              style={styles.input}
            />

            <label style={styles.label}>Venue:</label>
            <select
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              style={styles.input}
            >
              <option value="">Select Venue</option>
              <option value="Hall A">Hall A</option>
              <option value="Hall B">Hall B</option>
              <option value="Auditorium">Auditorium</option>
            </select>

            <label style={styles.label}>Capacity:</label>
            <input
              type="number"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              style={styles.input}
            />

            <label style={styles.label}>Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              style={styles.input}
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Closed">Closed</option>
            </select>

            <button
              style={{
                background: "#2ecc71",
                color: "white",
                border: "none",
                padding: "10px 15px",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
                width: "50%",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              onClick={handleFilter}
            >
              Apply Filters
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const styles: { [key: string]: CSSProperties } = {
  container: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "18px",
    color: "#555",
  },
  input: {
    width: "50%",
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    display: "flex",
    alignItems: "center",
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "8px 15px",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonIcon: {
    marginRight: "5px",
  },

  // **🔹 Fully Blurred Modal Background**
  modalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.3)", // ✅ Keeps a slight dark shade
    backdropFilter: "blur(20px)", // ✅ FULL Blur Effect
    zIndex: 1000, // ✅ Ensures it's above everything else
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  modal: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    width: "40%", // ✅ Cut width in half
    textAlign: "center",
    position: "relative",
  },
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    border: "none",
    background: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  modalTitle: {
    marginBottom: "15px",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "5px",
    fontWeight: "bold",
  },
  applyButton: {
    background: "#2ecc71",
    color: "white",
    border: "none",
    padding: "10px 15px",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
    width: "100%",
  },
};

export default SearchFilter;
