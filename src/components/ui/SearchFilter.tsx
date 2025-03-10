"use client";

import { useState } from "react";
import { FaSearch, FaFilter, FaTimes } from "react-icons/fa";
import "../../styles/SearchFilter.css";

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
      <div className="search-filter-container">
        <FaSearch className="search-filter-icon" />
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-filter-input"
        />
        <button
          className="search-filter-button"
          onClick={() => setIsModalOpen(true)}
        >
          <FaFilter className="search-filter-button-icon" /> Filter
        </button>
      </div>

      {/* 📌 Modal UI */}
      {isModalOpen && (
        <div
          className="search-filter-modal-overlay"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="search-filter-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="search-filter-close-button"
              onClick={() => setIsModalOpen(false)}
            >
              <FaTimes />
            </button>
            <h2 className="search-filter-modal-title">Filter Options</h2>

            <label className="search-filter-label">Date:</label>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="search-filter-input"
            />

            <label className="search-filter-label">Time:</label>
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="search-filter-input"
            />

            <label className="search-filter-label">Venue:</label>
            <select
              value={venue}
              onChange={(e) => setVenue(e.target.value)}
              className="search-filter-input"
            >
              <option value="">Select Venue</option>
              <option value="Hall A">Hall A</option>
              <option value="Hall B">Hall B</option>
              <option value="Auditorium">Auditorium</option>
            </select>

            <label className="search-filter-label">Capacity:</label>
            <input
              type="number"
              placeholder="Capacity"
              value={capacity}
              onChange={(e) => setCapacity(e.target.value)}
              className="search-filter-input"
            />

            <label className="search-filter-label">Status:</label>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="search-filter-input"
            >
              <option value="">Select Status</option>
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
              <option value="Closed">Closed</option>
            </select>

            <button
              className="search-filter-apply-button"
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

export default SearchFilter;
