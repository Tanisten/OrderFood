import React, { createContext, useCallback, useEffect, useState } from "react";
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

  const addToBasket = async (item) => {
    try {
      const responce = await fetchAPI(`foods/${item.id}/addToBasket`, {
        method: "POST",
        body: {
          amount: Number(item.amount),
        },
      });

      setItems(responce.data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const updateBaskeItem = async ({ id, amount }) => {
    try {
      const { data } = await fetchAPI(`basketItem/${id}/update`, {
        method: "PUT",
        body: { amount },
      });
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const deleteBaskeItem = async (id) => {
    try {
      const { data } = await fetchAPI(`basketItem/${id}/delete`, {
        method: "DELETE",
      });
      setItems(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const memoAddToBasket = useCallback(() => {
    return addToBasket();
  }, []);

  const state = {
    items,
    memoAddToBasket,
    updateBaskeItem,
    deleteBaskeItem,
  };

  return (
    <BasketContext.Provider value={state}>{children}</BasketContext.Provider>
  );
};
