import React from "react";
import styled from "styled-components";
import lvBuilding from "../assets/Lvbuilding.jpg"; // Correct import
import { FaAlignJustify } from "react-icons/fa";

// Header Section
const Header = styled.header`
  background-color: transparent;
  color: darkblue;
  padding: 20px;
  text-align: center;
  font-size: 24px;
  margin-bottom: 10px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding: 15px;
  }
`;

// Navigation Bar Section
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
  justify-content: space-evenly; /* Evenly spaces out the navigation items */
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%; /* Ensures the ul takes up the whole width of the container */

  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const NavItem = styled.li`
  color: darkblue;
  font-size: 16px;
  cursor: pointer;
  text-align: center; /* Ensures the text inside each item is centered */

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 768px) {
    font-size: 14px;
    margin: 10px 0;
  }
`;

// Main Content and Photo Section
const MainContent = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding: 15px;
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
`;

const PhotoImage = styled.img`
  width: 100%;
  height: auto; /* Ensure the image keeps its aspect ratio */
  border-radius: 8px;
`;

// Features Component
const Features: React.FC = () => {
  return (
    <div>
      {/* Header Section */}
      <Header>
        <h1>Features</h1>
      </Header>

      {/* Navigation Bar Section */}
      <NavigationBar>
        <NavList>
          <NavItem>Work Order</NavItem>
          <NavItem>Asset Management</NavItem>
          <NavItem>Preventive Maintenance</NavItem>
          <NavItem>Reports and Dashboard</NavItem>
          <NavItem>Facility Scheduling</NavItem>
        </NavList>
      </NavigationBar>

      {/* Main Content and Photo Section */}
      <MainContent>
        {/* Content Section */}
        <Content>
          <h1>Work Order</h1>
          <br />
          <p
            style={{
              textAlign: "justify",
              fontSize: "16px",
              lineHeight: "1.6",
              color: "#555",
            }}
          >
            A Computerized Maintenance Management System (CMMS) revolutionizes
            work order management by automating the creation, tracking, and
            completion of tasks. With a CMMS, maintenance teams can easily
            generate work orders, assign them to the right personnel, and
            monitor progress in real time. This leads to faster response times,
            improved organization, and reduced errors. The system helps
            prioritize work orders based on urgency, track parts and resources,
            and ensure that no task is overlooked, ultimately boosting
            operational efficiency and equipment reliability.
          </p>
        </Content>

        {/* Photo Section */}
        <Photo>
          <PhotoImage src={lvBuilding} alt="Building" />{" "}
          {/* Correct usage of imported image */}
        </Photo>
      </MainContent>
    </div>
  );
};

export default Features;
