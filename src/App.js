import Header from "./components/Header/Header";
import Summary from "./components/Summary/Summary";
import Meals from "./components/Meals/Meals";
import { Basket } from "./components/Basket/Basket";
import styled from "styled-components";
import { useCallback, useState } from "react";
import { BasketProvider } from "./store/BasketContext";

/* const D_DATA = [
  {
    title: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    title: "Schnitzel",
    description: "A german specialty!",
    price: 16,
  },
  {
    title: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    title: "Green Bowl",
    description: "Healthy...and green...",
    price: 19.99,
  },
]; */

function App() {
  const [isBasketVisible, setbasketVisibility] = useState(false);

  const showBasketHandler = () => {
    setbasketVisibility((prevState) => !prevState);
  };

  const clickHandler = useCallback(() => {
    console.log("isBasketVisible", isBasketVisible);
  }, [isBasketVisible]);

  /* 
  const [sortDirection, setSortDirection] = useState("asc");
  const sortedMeals = useMemo(() => {
    const notSorted = [...D_DATA];

    return notSorted.sort((a, b) => {
      if (sortDirection === "asc") {
        return a.price - b.price;
      }
      return b.price - a.price;
    });
  }, [sortDirection]); */

  return (
    <BasketProvider>
      <Header onShowBasket={showBasketHandler} />
      <Content>
        <Summary clickHandler={clickHandler} />
        {/* <select
          onChange={(e) => setSortDirection(e.target.value)}
          value={sortDirection}
        >
          <option value="asc">expensive</option>
          <option value="desc">cheaper</option>
        </select> */}
        <Meals /* sortedMeals={sortedMeals} */ />
        {isBasketVisible && <Basket onClose={showBasketHandler} />}
      </Content>
    </BasketProvider>
  );
}

export default App;

const Content = styled.div`
  margin-top: 101px;
`;
