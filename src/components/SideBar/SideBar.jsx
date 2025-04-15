import { SidebarContainer, LinkContainer, IconWrapper, Underline } from "./SideBarStyles";
import { Album } from "lucide-react";


const Sidebar = () => {
  return (
    <SidebarContainer>
      <LinkContainer to="/about">
        <IconWrapper>
          <Album />
        </IconWrapper>
          Inventario
        <Underline />
      </LinkContainer>
    </SidebarContainer>
  );
};

export default Sidebar;
