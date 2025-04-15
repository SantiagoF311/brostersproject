import styled from "styled-components";

export const LayoutContainer = styled.div`
  display: flex;
  gap: 3rem;
  flex-grow: 1; 
  overflow: hidden; 
  padding-right: 2rem;
  padding-left: 2rem;
  padding-bottom: 2rem;
  
`;


export const MainContent = styled.main`
  overflow-x: auto;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 2em;
  border-radius: 40px;
  flex-grow: 1;
  max-height: 100vh;
`;
