import { memo, useMemo } from "react";
import styled from "styled-components";
import MealItemForm from "./MealItemForm";
import NewComponent from "./newComponent";

 const MealItem = ({ title, description, price,id }) => {



   const memoTitle = useMemo(() => {
     const newTitle = title

    return  newTitle
  }, [title]);


  const memoDescription = useMemo(() => {
     
    const newDescription = description
    return  newDescription
  }, [description]);

  const memoPrice = useMemo(() => {
    const newPrice = price

    return  newPrice
  }, [price]);

  const memoId = useMemo(() => {
    const newId = id

    return  newId
  }, [id]);


  return (
    <StyledItem>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
        <span>${price}</span>
      </div>
      <NewComponent></NewComponent>
      <MealItemForm id={memoId}  title={memoTitle} price={memoPrice} />
    </StyledItem>
  );
};


export default memo(MealItem)
const StyledItem = styled.li`
  list-style: none;

  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid black;
  padding-bottom: 24px;
  padding-top: 24px;
  margin-bottom: 20px;

  /* DIV STYLE */

  div {
    margin-bottom: 20pxs;

    h4 {
      margin: 0;
      font-weight: 600;
      font-size: 18px;
      line-height: 27px;
      color: #222222;
    }
    p {
      margin: 0;
      font-weight: 400;
      font-size: 16px;
      line-height: 24px;
      color: #222222;
    }

    span {
      margin: 0;
      margin-top: 4px;
      font-weight: 700;
      font-size: 20px;
      line-height: 30px;
      color: #ad5502;
    }
  }

  :first-child {
    padding-top: 0;
  }
  :last-child {
    border: none;
  }
`;
