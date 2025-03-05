import React, { useState } from "react";
import styled from "styled-components";
import LVlogo from "../assets/LVlogo.jpg";

function Footer() {
  const [hover, setHover] = useState<string | null>(null);

  const handleMouseOver = (item: string) => setHover(item);
  const handleMouseOut = () => setHover(null);

  return (
    <FooterContainer>
      {/* Logo Column with Image */}
      <LogoColumn>
        <img src={LVlogo} alt="LV Logo" />
      </LogoColumn>

      {/* About Section */}
      <Column>
        <SectionTitle>Company</SectionTitle>
        <LinkItem
          href="#aboutus"
          onMouseOver={() => handleMouseOver("aboutUs")}
          onMouseOut={handleMouseOut}
          hover={hover === "aboutUs"}
        >
          About Us
        </LinkItem>
        <LinkItem
          href="#"
          onMouseOver={() => handleMouseOver("contact")}
          onMouseOut={handleMouseOut}
          hover={hover === "contact"}
        >
          Contact Us
        </LinkItem>
        <LinkItem
          href="#"
          onMouseOver={() => handleMouseOver("blogs")}
          onMouseOut={handleMouseOut}
          hover={hover === "blogs"}
        >
          Blogs
        </LinkItem>
      </Column>

      {/* Help Center Section */}
      <Column>
        <SectionTitle>Help Center</SectionTitle>
        <LinkItem
          href="#"
          onMouseOver={() => handleMouseOver("whyUs")}
          onMouseOut={handleMouseOut}
          hover={hover === "whyUs"}
        >
          Why Us?
        </LinkItem>
        <LinkItem
          href="#"
          onMouseOver={() => handleMouseOver("faqs")}
          onMouseOut={handleMouseOut}
          hover={hover === "faqs"}
        >
          FAQs
        </LinkItem>
      </Column>

      {/* Contact Info Section */}
      <Column>
        <SectionTitle>Contact Info</SectionTitle>
        <ContactItem>Email: CMMS@gmail.com</ContactItem>
        <ContactItem>Location: Apalit, Pampanga</ContactItem>
      </Column>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 40px 20px;
  background-color: transparent;
  border-top: 100px solid #ffffff;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 30px 15px;
  }

  @media (max-width: 1024px) {
    padding: 20px 10px;
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 768px) {
    padding: 15px;
    justify-content: center;
  }

  @media (max-width: 480px) {
    padding: 10px;
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  flex: 1 1 200px;
  margin: 0 15px;
  text-align: left;
  padding-bottom: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    margin: 10px 0;
    text-align: center;
  }

  @media (max-width: 480px) {
    margin: 5px 0;
  }
`;

const LogoColumn = styled(Column)`
  flex: 1 1 250px;
  margin-right: 20px;
  text-align: left;

  @media (max-width: 768px) {
    flex: 1 1 100%;
    text-align: center;
    margin: 20px 0;
  }

  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
  }
`;

const SectionTitle = styled.p`
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 1.2rem;
  color: black;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const LinkItem = styled.a<{ hover: boolean }>`
  display: block;
  margin: 8px 0;
  font-size: 1rem;
  color: darkblue;
  text-decoration: none;
  transition: all 0.3s ease;
  text-decoration: ${(props) => (props.hover ? "underline" : "none")};
  text-align: center;
  &:hover {
    text-decoration: underline;
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

const ContactItem = styled.div`
  margin: 8px 0;
  font-size: 1rem;
  color: black;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 0.9rem;
  }
`;

export default Footer;
