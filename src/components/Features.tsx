import React, { useState } from "react";
import styled from "styled-components";
import lvBuilding from "../assets/Lvbuilding.jpg"; // Placeholder image

// Styled components
const Header = styled.header`
  background-color: transparent;
  color: darkblue;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

const NavigationBar = styled.nav`
  margin: 50px;
  background-color: transparent;
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
    margin: 20px;
  }
`;

const NavList = styled.ul`
  display: flex;
  justify-content: space-evenly;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%; 

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  color: darkblue;
  font-size: 16px;
  cursor: pointer;
  text-align: center; 

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 10px 0;
  }

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

// MainContent styled component now accepts `isReversed` prop
const MainContent = styled.div<{ isReversed: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 20px;
  }

  ${({ isReversed }) =>
    isReversed &&
    `
    flex-direction: row-reverse;
  `}

  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;

const Content = styled.div`
  width: 50%;
  padding: 20px;
  height: auto;

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 15px;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    padding: 10px;
  }
`;

const Photo = styled.div`
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-top: 20px;
  }

  @media screen and (max-width: 480px) {
    margin-top: 10px;
  }
`;

const PhotoImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;

  @media screen and (max-width: 768px) {
    width: 80%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;

// Features Component
const Features: React.FC = () => {
  // Data for features
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

  // Set default selected feature to Work Order (index 0)
  const [selectedFeature, setSelectedFeature] = useState(0);

  // Handle navigation item click
  const handleNavItemClick = (index: number) => {
    setSelectedFeature(index); // Always select the clicked item
  };

  // Logic to alternate the positions for large screens
  const isReversed = selectedFeature % 2 === 1;

  return (
    <div>
      {/* Header Section */}
      <Header>
        <h1>Features</h1>
      </Header>

      {/* Navigation Bar Section */}
      <NavigationBar>
        <NavList>
          {featureData.map((feature, index) => (
            <NavItem key={index} onClick={() => handleNavItemClick(index)}>
              {feature.name}
            </NavItem>
          ))}
        </NavList>
      </NavigationBar>

      {/* Main Content and Photo Section */}
      <MainContent isReversed={isReversed}>
        <Content>
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
        </Content>

        <Photo>
          <PhotoImage
            src={featureData[selectedFeature].image}
            alt={featureData[selectedFeature].name}
          />
        </Photo>
      </MainContent>
    </div>
  );
};

export default Features;
