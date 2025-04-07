import { SidebarContainer, LinkContainer, IconWrapper, Underline } from "./SideBarStyles";
import { LayoutDashboard, Album } from "lucide-react";


const Sidebar = () => {
  return (
    <SidebarContainer>
      <LinkContainer to="/dashboard">
        <IconWrapper>
          <LayoutDashboard />
        </IconWrapper>
        Dashboard
        <Underline />
      </LinkContainer>
      
      <LinkContainer to="/about">
        <IconWrapper>
          <Album />
        </IconWrapper>
          About
        <Underline />
      </LinkContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
