import styled from "styled-components";

export const HomeContainer = styled.div`
  overflow-x: auto;
  width: 100%;
  display: flex;
  height: 100%;
  gap: 2em;
  
  @media (max-width: 1430px) {
    flex-direction: column;
  }
`