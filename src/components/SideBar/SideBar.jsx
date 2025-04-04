import { SidebarContainer, StyledLink, LinkContainer } from "./SideBarStyles";
import { LayoutDashboard } from "lucide-react"; 

const Sidebar = () => {
  return (
    <SidebarContainer>
      <LinkContainer>
        <LayoutDashboard size={20} color="#000000" />     
        <StyledLink to="/inventario">Inventario</StyledLink>
      </LinkContainer>
      
      <StyledLink to="/about">About</StyledLink>
    </SidebarContainer>
  );
};

export default Sidebar;
