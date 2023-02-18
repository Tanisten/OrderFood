import { Header } from "./components/Header/Header";
import { Summary } from "./components/Summary/Summary";
import { Meals } from "./components/Meals/Meals";
import { Basket } from "./components/Basket/Basket";
import styled from "styled-components";
import { useState } from "react";
import { BasketProvider } from "./store/BasketContext";




function App() {
  const [isBasketVisible, setbasketVisibility] = useState(false);

  const showBasketHandler = () => {
    setbasketVisibility((prevState) => !prevState);
  };

  return (
      <BasketProvider>
        <Header onShowBasket={showBasketHandler} />
        <Content>
          <Summary />
          <Meals />
          {isBasketVisible && <Basket onClose={showBasketHandler} />}
        </Content>
      </BasketProvider>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;


// GET /foods
// Headers: { UserID:"your_name"}

// GET /basket
// Headers: { UserID:"your_name"}
 

// POST /foods/:foodId/addToBasket
// BODY: {amount:number}
// Headers: { UserID:"your_name"}
 

// DELETE /basketItem/:id/delete
// Headers: { UserID:"your_name"}

// PUT /basketItem/:id/update
// Headers: { UserID:"your_name"}