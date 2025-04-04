import styled from "styled-components";

export const Nav = styled.nav`
  padding: 2rem;
  padding-left: 3rem;

`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 2.5em;
`;

export const NavItem = styled.li``;



export const NavLinkImage = styled.img`
  min-width: 8rem;
  width: 10rem;
  height: auto;
  cursor: pointer;
`;



// Contenedor del buscador
export const SearchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f3f3f3;
  width: 100%;
  height: 52px;
  border: 2.5px solid transparent;
  border-radius: 20px;
  outline: none;
  transition: background-color 0.2s ease, border 0.2s ease; 

  &:hover,
  &:focus,
  &:focus-within,
  &:active
   {
    background-color: white;
    border: 2.5px solid #d1020258;
  }
`;

// Estilo del input de búsqueda
export const SearchInput = styled.input`
  padding-left: 1.5em;
  background-color: transparent;
  border-style: none;
  width: 80%;

  &:focus,
  &:focus-visible {
    outline: none;
    border: none;
    box-shadow: none;
  }
`;

export const SearchIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 8px;
  background-color: #d10202;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;
