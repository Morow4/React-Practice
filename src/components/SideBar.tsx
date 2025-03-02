"use client";

import { useState } from "react";
import styled from "styled-components";
import {
  HiHome,
  HiCalendar,
  HiClipboardList,
  HiChat,
  HiCog,
  HiLogout,
} from "react-icons/hi";

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
`;

// Sidebar Toggle Button
const ToggleButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
  margin: 10px;
  align-self: flex-end;
`;

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
`;

// **Accept a function prop `setSidebarOpen` to update Dashboard**
const Sidebar: React.FC<{ setSidebarOpen: (isOpen: boolean) => void }> = ({
  setSidebarOpen,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  // Toggle Sidebar and inform Dashboard
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
    setSidebarOpen(!isOpen); // Pass state to Dashboard
  };

  return (
    <SidebarWrapper isOpen={isOpen}>
      <ToggleButton onClick={toggleSidebar}>
        {isOpen ? "<<" : ">>"}
      </ToggleButton>

      <SidebarItem href="#">
        <HiHome /> {isOpen && "Dashboard"}
      </SidebarItem>
      <SidebarItem href="#">
        <HiCalendar /> {isOpen && "Schedule"}
      </SidebarItem>
      <SidebarItem href="#">
        <HiClipboardList /> {isOpen && "Manage"}
      </SidebarItem>
      <SidebarItem href="#">
        <HiChat /> {isOpen && "Messages"}
      </SidebarItem>
      <SidebarItem href="#">
        <HiCog /> {isOpen && "Settings"}
      </SidebarItem>

      <div style={{ marginTop: "auto" }}>
        <SidebarItem href="#">
          <HiLogout /> {isOpen && "Logout"}
        </SidebarItem>
      </div>
    </SidebarWrapper>
  );
};

export default Sidebar;
