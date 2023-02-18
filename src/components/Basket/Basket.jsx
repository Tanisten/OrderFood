import { useContext } from "react";
import styled from "styled-components";
import { BasketContext } from "../../store/BasketContext";
import Modal from "../UI/Modal";
import BasketItem from "./BasketItem";
import TotalAmount from "./TotalAmount";

export const Basket = ({ onClose }) => {
  const { items, updateBaskeItem, deleteBaskeItem } = useContext(BasketContext);

  const getTotalPrice = () => {
    return items.reduce((s, { price, amount }) => {
      return s + price * amount;
    }, 0);
  };

  const decrementAmount = (amount, id) => {
    if (amount > 1) {
      updateBaskeItem({ amount: amount - 1, id });
    } else {
      deleteBaskeItem(id)
    }
  };

  const incrementAmount = (amount, id) => {
    updateBaskeItem({ amount: amount + 1, id });
  };

  return (
    <Modal onClose={onClose}>
      <BasketDiv>
        {items.length ? (
          <FixedHeightContainer>
            {items.map((element) => {
              return (
                <BasketItem
                  key={element._id}
                  price={element.price}
                  title={element.title}
                  amount={element.amount}
                  incrementAmount={() =>
                    incrementAmount(element.amount, element._id)
                  }
                  decrementAmount={() =>
                    decrementAmount(element.amount, element._id)
                  }
                />
              );
            })}
          </FixedHeightContainer>
        ) : null}

        <TotalAmount
          price={getTotalPrice()}
          onClose={onClose}
          onOrder={() => {}}
        />
      </BasketDiv>
    </Modal>
  );
};

const BasketDiv = styled.div`
  padding: 1rem 1rem 1.5rem 1rem;

  height: 100%;
`;

const FixedHeightContainer = styled.div`
  max-height: 228px;
  overflow-y: scroll;
`;
