import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import LandingPage from "./components/LandingPage";
import LoginPage from "./components/LoginPage";
import NavigationBar from "./components/NavigationBar";
import RegistrationPage from "./components/RegistrationPage";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";

const AppLayout = () => {
  const location = useLocation();
  const showNavBarRoutes = ["/home", "/login", "/registration"];
  const showNavBar = showNavBarRoutes.includes(location.pathname);

  // Add state for the sidebar's open/close state
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <>
      {showNavBar && <NavigationBar />}
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />

        {/* Pass the required props to SideBar */}
        <Route
          path="/sidebar"
          element={
            <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
};

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;
