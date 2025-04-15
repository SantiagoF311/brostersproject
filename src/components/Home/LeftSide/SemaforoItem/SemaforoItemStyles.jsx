import styled from "styled-components";

export const SemaforoItemContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 2em;
  padding: 1.5em;
  min-width: 0;
  border-radius: 15px;
  background-color: #ffffff53;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

`;

export const SemaforoIconContainer = styled.div`
  display: flex;
`;

export const SemaforoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SemaforoText = styled.span`
  color: #5f5f5f;
  font-size: .8rem;
  font-weight: bold;
`;

export const SemaforoNumber = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #111;
`;