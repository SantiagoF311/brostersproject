import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const SidebarContainer = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 40px;
  gap: 1.5em;
  width: 160px;
  background-color: transparent;
`;

export const LinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2em;
`;

// Primero definimos los componentes que serán referenciados
export const IconWrapper = styled.span`
  display: inline-flex;
  color: inherit;
  width: 20px;
  height: 20px;
  transition: color 0.3s ease;

  & > svg {
    width: 100%;
    height: 100%;
  }
`;

export const Underline = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 4px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.colors.primary};
  transition: width 0.3s ease;
`;

export const LinkContainer = styled(NavLink)`
  display: flex;
  justify-content: start;
  align-items: center;
  width: fit-content;
  position: relative;
  padding-bottom: 0.7em;
  gap: 0.7em;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.9rem;
  font-weight: bold;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
    
    ${IconWrapper} {
      color: ${({ theme }) => theme.colors.primary};
    }
    
    ${Underline} {
      width: 100%;
    }
  }

  &.active {
    color: ${({ theme }) => theme.colors.primary};
    
    ${IconWrapper} {
      color: ${({ theme }) => theme.colors.primary};
    }
    
    ${Underline} {
      width: 100%;
    }
  }
`;