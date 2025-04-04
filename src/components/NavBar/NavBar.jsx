import { Link } from "react-router-dom";
import { Search } from "lucide-react"; 

import { 
  Nav, 
  NavList, 
  NavItem, 
  NavLinkImage, 
  SearchContainer, 
  SearchInput, 
  SearchIconWrapper
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
        <SearchContainer>
          <SearchInput type="text" placeholder="Buscar..." />
          <SearchIconWrapper>
            <Search size={20} color="#ffffff" />
          </SearchIconWrapper>
        </SearchContainer>
      </NavList>
    </Nav>
  );
};

export default Navbar;
