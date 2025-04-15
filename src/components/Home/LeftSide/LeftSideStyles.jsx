import styled from "styled-components";

export const LeftSideContainer = styled.div`
    overflow-x: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2em;
    padding-top: 1em;
    flex: 3;

    @media (max-width: 1430px) {
      flex-direction: row;
      padding-bottom: .5em;
  }

  @media (max-width: 925px) {
      flex-direction: column;
      padding-bottom: .5em;
  }
`

export const SemaforoContainer = styled.div`
    display: flex;
    gap: 2em;
    flex-wrap: wrap;
    min-height: 0;
    flex: 1;

    @media (max-width: 1430px) {
      flex-direction: column;
  }

  @media (max-width: 1340px) {
    min-width: 243px;
  }

  @media (max-width: 925px) {
    min-width: 0;
    flex-direction: row;
  }
`;

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  width: 100%;
  flex: 3;
`;
