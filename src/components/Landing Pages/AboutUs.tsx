import React from "react";
import "../../styles/AboutUs.css";
import Lvbuilding from "../../assets/Lvbuilding.jpg";

const AboutUs: React.FC = () => {
  return (
    <div className="about-us-wrapper">
      <div className="image-container" style={{ backgroundImage: `url(${Lvbuilding})` }} />
      <div className="text-container">
        <h2 className="header">About Us</h2>
        <p className="text">
          Computerized Maintenance Management System (CMMS) with Facility
          Scheduling is a robust solution designed to streamline the management
          and maintenance of facilities and equipment. By integrating advanced
          scheduling features, this system enables businesses to plan, track,
          and optimize their maintenance tasks effectively. <br /> The CMMS
          automates routine maintenance schedules, tracks work orders, and
          allows managers to oversee the maintenance process with ease. Coupled
          with facility scheduling, it helps coordinate the usage of spaces and
          resources, ensuring seamless operations and minimizing downtime.
          Whether you're handling equipment repairs, preventive maintenance, or
          managing multiple facilities, our system improves efficiency, reduces
          costs, and ensures a higher standard of service across all your
          operations.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
