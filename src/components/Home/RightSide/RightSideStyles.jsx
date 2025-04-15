import styled from "styled-components";

export const RightSideContainer = styled.div`
overflow-x: auto;
width: 100%;
display: flex;
flex-direction: column;
gap: 2em;
padding-top: 1em;
flex: 1;

@media (max-width: 1430px) {
      flex-direction: row;
  }
`

export const CalendaryContainer = styled.div`
min-height: 0;
flex: 3;

@media (max-width: 1430px) {
    flex: 1;
  }
`

export const CalendaryItemContainer = styled.div`
min-height: 0;
flex: 4;

@media (max-width: 1430px) {
    flex: 3;
  }
`