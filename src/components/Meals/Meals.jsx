import { useEffect, useState } from "react";
import styled from "styled-components";
import { fetchAPI } from "../../lib/fetchApi";

import { MealItem } from "./MealItem";

const DUMMY_MEALS = [
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
];

export const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getMeals = async () => {
    try {
      setLoading(true);
      const responce = await fetchAPI("foods");
      setMeals(responce.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setError("Failed to load meals");
    }
  };

  useEffect(() => {
    getMeals();
  }, []);

  return (
    <Card>
      {loading && !error && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {DUMMY_MEALS.map((meal) => {
        return (
          <MealItem
            key={meal.title}
            id={meal.price}
            title={meal.title}
            description={meal.description}
            price={meal.price}
          ></MealItem>
        );
      })}
    </Card>
  );
};

const Card = styled.ul`
  margin: 0 auto;
  margin-top: 40px;
  background: #ffffff;
  border-radius: 16px;
  width: 1039px;
  padding: 40px;
`;
