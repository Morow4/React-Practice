import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
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

  return (
    <>
      {showNavBar && <NavigationBar />}
      <Routes>
        <Route path="/home" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
        <Route path="/sidebar" element={<SideBar />} />
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
