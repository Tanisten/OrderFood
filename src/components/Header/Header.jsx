import { memo, useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";

import { BasketButton } from "./BasketButton";

 const Header = ({ onShowBasket }) => {
  const { items } = useContext(BasketContext);

  const [animationClass, setAnimationClass] = useState("");
  
  const calculateTotalAmount = () => {
    const sum = items.reduce((s, item) => {
      return Number(s) + Number(item.amount);
    }, 0);
    return sum;
  };

  useEffect(() => {
    setAnimationClass("bump");
    const id = setTimeout(() => {
      setAnimationClass("");
    }, 300);
    return () => {
      clearTimeout(id);
    };
  }, [items]);


 
  return (
    <Container>
      <Logo>ReactMeals</Logo>

      <BasketButton
        onClick={onShowBasket}
        count={calculateTotalAmount()}
        className={animationClass}
      />
    </Container>
  );
};


export default memo(Header)
const Container = styled.header`
  margin: 0 auto;
  background-color: #8a2b06;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 120px;
  padding-right: 120px;
  align-items: center;
  position: fixed;
  width: 90vw;
  height: 101px;
  z-index: 2;
  top: 0;
  left: 0;
`;

const Logo = styled.p`
  font-weight: 600;
  font-size: 38px;
  line-height: 57px;
  margin: 0;
  color: #ffffff;
`;
