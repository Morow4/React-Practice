import React from "react";
import styled from "styled-components";
import lvBuilding from "../assets/Lvbuilding.jpg"; // Correct import path

// Styled components for layout and styling
const AboutUsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 100px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0);
  max-width: 100%;
  height: 100%;
  width: 100%; /* Ensures the component takes the full available width */
  
  /* Responsive Design: When screen width is <= 768px, stack items vertically */
  @media (max-width: 768px) {
    flex-direction: column;
    padding: 50px 20px; /* Reduce padding for smaller screens */
  }
`;

const ImageContainer = styled.div`
  width: 50%;
  height: 350px;
  margin-right: 50px;
  background-image: url(${lvBuilding});
  background-size: cover;
  background-position: center;
  border-radius: 20px;

  /* Responsive Design: Image container takes full width on small screens */
  @media (max-width: 768px) {
    width: 100%;
    height: 250px; /* Adjust height on smaller screens */
    margin-right: 0;
    border-radius: 10px;
  }
`;

const TextContainer = styled.div`
  width: 60%;
  color: #333;

  /* Responsive Design: Text container takes full width on small screens */
  @media (max-width: 768px) {
    width: 100%;
    text-align: center; /* Center text on smaller screens */
    margin-top: 20px; /* Add a small margin on top of the text when stacked */
  }
`;

const Header = styled.h2`
  font-size: 32px;
  color: #007bff;
  margin-bottom: 20px;

  /* Responsive Design: Reduce font size on small screens */
  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #555;

  /* Responsive Design: Reduce font size for small screens */
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const AboutUs: React.FC = () => {
  return (
    <AboutUsWrapper>
      <ImageContainer />
      <TextContainer>
        <Header>About Us</Header>
        <Text>
          Welcome to our company! We are dedicated to providing the best
          services and solutions to our customers. Our team consists of highly
          skilled professionals who are passionate about making a positive
          impact on the industry. We strive for excellence in everything we do
          and aim to create lasting relationships with our clients. Learn more
          about our vision and values below.
        </Text>
      </TextContainer>
    </AboutUsWrapper>
  );
};

export default AboutUs;
