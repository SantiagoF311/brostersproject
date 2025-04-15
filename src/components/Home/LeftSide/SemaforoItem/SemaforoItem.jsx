import {
    SemaforoItemContainer,
    SemaforoIconContainer,
    SemaforoTextContainer,
    SemaforoText,
    SemaforoNumber,
  } from "./SemaforoItemStyles";
  
  const SemaforoItem = ({ icon, text, number }) => {
    return (
      <SemaforoItemContainer>
        <SemaforoIconContainer>{icon}</SemaforoIconContainer>
        <SemaforoTextContainer>
          <SemaforoText>{text}</SemaforoText>
          <SemaforoNumber>{number}</SemaforoNumber>
        </SemaforoTextContainer>
      </SemaforoItemContainer>
    );
  };
  
  export default SemaforoItem;