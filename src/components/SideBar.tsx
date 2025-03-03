"use client";

import { FC } from "react";
import styled from "styled-components";
import {
  HiHome,
  HiCalendar,
  HiClipboardList,
  HiChat,
  HiCog,
  HiLogout,
} from "react-icons/hi";

// Sidebar Wrapper (Responsive)
const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  width: ${({ isOpen }) => (isOpen ? "220px" : "70px")};
  transition: width 0.3s ease-in-out;
  height: 100vh;
  background: #1e293b;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  overflow: hidden;
  z-index: 1000;

  /* ✅ Mobile View (Navbar on Top) */
  @media (max-width: 768px) {
    width: 100%;
    height: auto;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px 15px;
  }
`;

// Sidebar Item
const SidebarItem = styled.a`
  display: flex;
  align-items: center;
  padding: 12px 20px;
  color: white;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #334155;
  }

  svg {
    margin-right: 10px;
    font-size: 20px;
  }

  /* ✅ Hide text on mobile */
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
    span {
      display: none;
    }
  }
`;

// Toggle Button
const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin: 10px;
  align-self: flex-end;

  /* ✅ Hide ToggleButton on small screens */
  @media (max-width: 768px) {
    display: none;
  }
`;

interface SideBarProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SideBar: FC<SideBarProps> = ({ isOpen, setIsOpen }) => {
  return (
    <SidebarWrapper isOpen={isOpen}>
      {/* Toggle Button */}
      <ToggleButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "<<" : ">>"}
      </ToggleButton>

      {/* Sidebar Items */}
      <SidebarItem href="#">
        <HiHome /> <span>{isOpen && "Dashboard"}</span>
      </SidebarItem>
      <SidebarItem href="#">
        <HiCalendar /> <span>{isOpen && "Schedule"}</span>
      </SidebarItem>
      <SidebarItem href="#">
        <HiClipboardList /> <span>{isOpen && "Manage"}</span>
      </SidebarItem>
      <SidebarItem href="#">
        <HiChat /> <span>{isOpen && "Messages"}</span>
      </SidebarItem>
      <SidebarItem href="#">
        <HiCog /> <span>{isOpen && "Settings"}</span>
      </SidebarItem>

      {/* Logout at the bottom */}
      <div style={{ marginTop: "auto" }}>
        <SidebarItem href="#">
          <HiLogout /> <span>{isOpen && "Logout"}</span>
        </SidebarItem>
      </div>
    </SidebarWrapper>
  );
};

export default SideBar;
