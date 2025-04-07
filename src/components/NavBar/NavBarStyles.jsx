import styled from "styled-components";

export const Nav = styled.nav`
  padding: 2rem;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  gap: 3em;
`;

export const SearcherPerfilContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  width: 100%;
  gap: .5em;
`;

export const NavItem = styled.li``;

export const NavLinkImage = styled.img`
  min-width: 10rem;
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
  width: 95%;
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
    border: 2.5px solid #c2020273;
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
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  cursor: pointer;

  & > svg {
    color: black;
    size: 20;
  }
`;

// Perfil

export const PerfilIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  min-width: 38px;
  min-height: 38px;
  transition: background-color .5s ease;

  & > svg {
    color: white;
    min-width: 20px;
  }
`;

export const ArrowIconWrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #000000;

  & > svg {
    width: 20px;
  }
`;

export const PerfilContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 52px;
  gap: .3em;
  padding-left: 10px;
  padding-right: 7px;
  border-radius: 15%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray};

    ${PerfilIconWrapper} {
      background-color: ${({ theme }) => theme.colors.primaryDark};
    }

    ${ArrowIconWrapper} {
      color: ${({ theme }) => theme.colors.primaryDark};
    }
  }
`

export const PerfilUsernameText = styled.p`
  font-size: 10px;
`

export const PerfilRoleText = styled.p`
  color: ${({ theme }) => theme.colors.gray};
  font-size: 10px;
`