import { memo, useCallback, useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { fetchAPI } from "../../lib/fetchApi";

import  MealItem  from "./MealItem";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [error, setError] = useState("");

  const getMeals = async () => {
    try {
      const responce = await fetchAPI("foods");
      setMeals(responce.data);
    } catch (error) {
      console.log(error);
      setError("Failed to load meals");
    }
  };

  useEffect(() => {
    getMeals()
  }, []);
 
  


  return (
    <Card>
      {error && <p>{error}</p>}
      {meals.map((meal) => {
        return (
          <MealItem
            key={meal.title}
            id={meal._id}
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

export default memo(Meals);
