import { memo } from "react";
import styled from "styled-components";
import BackgroundImage from "../../Assets/Images/Background.png";
import  SummaryInfoCard  from "./SummaryInfoCard";

 const Summary = ({clickHandler}) => {
  
  return (
    <Container>
      <button onClick={clickHandler}>CLICK ME</button>
      <StyledImg src={BackgroundImage} alt="summary" />
      <SummaryInfoCard></SummaryInfoCard>
    </Container>
  );
};

export default memo(Summary)

const Container = styled.div`
   height: 650px;

  
`;

const StyledImg = styled.img`
  width: 100%;
`;
