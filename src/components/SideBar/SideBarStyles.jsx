import styled from "styled-components";
import { Link } from "react-router-dom";

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  padding-left: 30px;
  gap: 2em;
  width: 230px;
  background-color: transparent;
`;

//Links container
export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
`

export const LinkContainer = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1em;
  border: 1px solid black;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #000000;
  font-size: .9rem;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: #d10202;
  }

  &:focus {
    outline: none;
    color: #525252;
  }
`;