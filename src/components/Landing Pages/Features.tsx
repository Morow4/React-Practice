import React, { useState } from "react";
import lvBuilding from "../../assets/lvbuilding.jpg";
import "../../styles/Features.css";

const Features: React.FC = () => {
  const featureData = [
    {
      name: "Work Order",
      description:
        "A Computerized Maintenance Management System (CMMS) helps automate the creation, tracking, and completion of tasks. It allows for easier generation, assignment, and monitoring of work orders in real-time.",
      image: lvBuilding,
    },
    {
      name: "Asset Management",
      description:
        "Asset Management involves tracking and managing assets efficiently. This helps improve asset lifespan and performance by keeping an organized record of repairs, maintenance, and replacements.",
      image: lvBuilding,
    },
    {
      name: "Preventive Maintenance",
      description:
        "Preventive Maintenance ensures equipment is maintained before it fails. Scheduled maintenance reduces downtime and helps prolong the life of machinery, thereby saving on long-term repair costs.",
      image: lvBuilding,
    },
    {
      name: "Reports and Dashboard",
      description:
        "Reports and Dashboards provide real-time insights into the performance and maintenance of assets. It helps managers make data-driven decisions and track performance KPIs effectively.",
      image: lvBuilding,
    },
    {
      name: "Facility Scheduling",
      description:
        "Facility Scheduling helps in planning and managing the use of different facilities. It allows for optimal scheduling, ensuring that resources are used efficiently without conflicts.",
      image: lvBuilding,
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(0);

  const handleNavItemClick = (index: number) => {
    setSelectedFeature(index);
  };

  const isReversed = selectedFeature % 2 === 1;

  return (
    <div>
      <header>
        <h1>Features</h1>
      </header>

      <nav className="navigation-bar">
        <ul className="nav-list">
          {featureData.map((feature, index) => (
            <li
              key={index}
              className="nav-item"
              onClick={() => handleNavItemClick(index)}
            >
              {feature.name}
            </li>
          ))}
        </ul>
      </nav>

      <div className={`main-content ${isReversed ? "reversed" : ""}`}>
        <div className="content">
          <h1>{featureData[selectedFeature].name}</h1>
          <br />
          <p
            style={{
              textAlign: "justify",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            {featureData[selectedFeature].description}
          </p>
        </div>

        <div className="photo">
          <img
            src={featureData[selectedFeature].image}
            alt={featureData[selectedFeature].name}
          />
        </div>
      </div>
    </div>
  );
};

export default Features;
