import React, { createContext, useEffect, useState } from "react";
import { fetchAPI } from "../lib/fetchApi";

export const BasketContext = createContext({ items: [] });

export const BasketProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getBasket = async () => {
    try {
      const { data } = await fetchAPI("basket");
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBasket();
  }, []);

  const addToBasket = (item) => {
    setItems((prevState) => {
      let updatedItems = [...prevState];

      const elementExist = updatedItems.findIndex(
        (element) => element.id === item.id
      );
      if (elementExist >= 0) {
        updatedItems[elementExist].amount += item.amount;
        return updatedItems;
      } else {
        return [...prevState, item];
      }
    });
  };

  const increaseBasketItem = (id) => {
    setItems((prevState) => {
      let updatedItems = [...prevState];
      const elementIndex = updatedItems.findIndex(
        (element) => element.id === id
      );
      updatedItems[elementIndex].amount += 1;
      return updatedItems;
    });
  };

  const decreaseBasketItem = (id) => {
    setItems((prevState) => {
      let updatedItems = [...prevState];
      const elementIndex = updatedItems.findIndex(
        (element) => element.id === id
      );
      const amountOfItem = updatedItems[elementIndex].amount;
      if (amountOfItem > 0) {
        updatedItems[elementIndex].amount -= 1;
      }
      return updatedItems;
    });

    setItems((prevState) => {
      let newArray = [...prevState];

      const filteredArray = newArray.filter((element) => element.amount !== 0);

      return filteredArray;
    });
  };

  const state = {
    items,
    addToBasket,
    increaseBasketItem,
    decreaseBasketItem,
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
