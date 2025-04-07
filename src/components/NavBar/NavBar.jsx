import { Link } from "react-router-dom";
import { Drumstick, Search, ChevronDown } from "lucide-react"; 

import { 
  Nav, 
  NavList, 
  NavItem, 
  NavLinkImage, 
  SearchContainer, 
  SearchInput, 
  SearchIconWrapper,
  PerfilContainer,
  PerfilIconWrapper,
  SearcherPerfilContainer,
  PerfilUsernameText,
  PerfilRoleText,
  ArrowIconWrapper
} from "./NavBarStyles";
import homeIcon from "../../assets/broasters.webp"; // Ruta correcta de la imagen

const Navbar = () => {
  return (
    <Nav>
      <NavList>
        {/* Logo */}
        <NavItem>
          <Link to="/">
            <NavLinkImage src={homeIcon} alt="Home" />
          </Link>
        </NavItem>

        {/* Buscador con icono */}
        
        <SearcherPerfilContainer>
          <SearchContainer>
            <SearchInput type="text" placeholder="Buscar..." />
            <SearchIconWrapper>
              <Search/>
            </SearchIconWrapper>
          </SearchContainer>

          <PerfilContainer>
            <PerfilIconWrapper>
              <Drumstick/>
            </PerfilIconWrapper> 

            <ArrowIconWrapper>
              <ChevronDown/>
            </ArrowIconWrapper>                       
          </PerfilContainer>
        </SearcherPerfilContainer>

      </NavList>
    </Nav>
  );
};

export default Navbar;
