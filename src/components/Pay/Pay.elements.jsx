import styled from "styled-components";

export const PayWrapper = styled.div`
  direction: rtl;
  background-color: white;
`;

export const PayWrapperTitle = styled.h1`
  text-align: center;
  padding: 10px;
  font-weight: 400;
  background-color: rgb(234, 237, 237);
  border: 1px solid lightgrey;
`;

export const PayContainer = styled.div``;
export const PaySection = styled.div`
  display: flex;
  padding: 20px;
  margin: 0 20px;
  border-bottom: 1px solid lightgrey;
`;
export const PayTitleContainer = styled.div`
  flex: 0.2;
`;
export const PayTitle = styled.h3`
  color: #2946b6;
`;

export const PayAddressContainer = styled.div`
  flex: 0.8;
`;
export const PayAddressPara = styled.p``;
export const PayّItemsContainer = styled.div``;

export const CheckoutWrapper = styled.div`
  display: flex;
  padding: 20px;
  background-color: white;
  flex-wrap: wrap;
  height: max-content;
  justify-content: space-between;
  direction: rtl;
`;

export const CheckoutContainerLeftHeader = styled.h3`
  margin-right: 10px;
  padding: 5px;
  flex: 0.2;
`;

export const CheckoutContainerRight = styled.div`
  display: flex;
  color: #2946b6;
  font-style: italic;
  margin: 10px 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid lightgray;
`;

export const CheckoutContainerItems = styled.div`
  flex: 0.8;
  padding: 0;
`;

// In your Basket.elements.js file
export const BasketItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-top: 10px;
`;

export const BasketItemImg = styled.img`
  width: 150px;
`;

export const BasketItemInfo = styled.div``;

export const BasketItemPara = styled.p``;

export const BasketButton = styled.button`
  border-radius: 4px;
  background: ${({ primary }) => (primary ? "#2946b6" : "#759159")};
  white-space: nowrap;
  padding: 5px 30px;
  color: #fff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  margin-top: 2px;
  width: 8rem;

  &:hover {
    transition: all 0.3s ease-out;
    background: #fff;
    background: ${({ primary }) => (primary ? "#000000" : "#000000")};
  }
`;
export const TransCon = styled.div`
  border: 2px solid lightgray;
  border-radius: 4px;
  padding: 8px;
  margin-bottom: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); // This adds a mild shadow
`;

export const TransTitle = styled.h3`
  color: #2946b6;
  font-size: 20px;
`;
export const TransPara = styled.p`
  color: #2b2e2f;
  margin-bottom: 10px;
`;
