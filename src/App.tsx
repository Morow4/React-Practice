import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useState } from "react";
import LandingPage from "./components/Landing Pages/LandingPage";
import LoginPage from "./components/Landing Pages/LoginPage";
import NavigationBar from "./components/Landing Pages/NavigationBar";
import RegistrationPage from "./components/Landing Pages/RegistrationPage";
import SideBar from "./components/SideBar";
import Dashboard from "./components/Dashboard";
import CalendarUI from "./components/CalendarUI";
import FMUI from "./components/FMUI";
import AboutUs from "./components/Landing Pages/AboutUs";

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
        <Route path="/aboutus" element={<AboutUs />} />

        {/* Pass the required props to SideBar */}
        <Route
          path="/sidebar"
          element={
            <SideBar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
          }
        />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/calendar" element={<CalendarUI />} />
        <Route path="/facilitymanagement" element={<FMUI />} />
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
