import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Inventario from "../pages/Inventario";
import Navbar from "../components/NavBar/NavBar";
import Sidebar from "../components/SideBar/SideBar";
import { LayoutContainer, MainContent} from "./RouterStyles"; 
import { MainContainer } from "./MainStyles";

const AppRouter = () => {
  return (
    <Router>
      <MainContainer>
        <Navbar />
        <LayoutContainer>
          <Sidebar /> 
          <MainContent>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/inventario" element={<Inventario />} />
            </Routes>
          </MainContent>
        </LayoutContainer>
      </MainContainer>
    </Router>
  );
};

export default AppRouter;
