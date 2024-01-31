import React, { useEffect } from "react";
import {
  CheckoutContainerLeftHeader,
  CheckoutContainerRight,
  CheckoutWrapper,
  BasketItem,
  BasketButton,
  BasketItemImg,
  BasketItemInfo,
  BasketItemPara,
} from "./Basket.elements";
import Subtotal from "../Subtotal/Subtotal";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../../redux/basketRedux";
import { userRequest } from "../../requestMethods";
import { useNavigate } from "react-router-dom";

const Basket = () => {
  const cart = useSelector((state) => state.cart);
  const basketItems = useSelector((state) => state.basket.basketItems);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRemoveFromBasket = (index) => {
    dispatch(removeFromBasket(index));
  };

  const subtotal = basketItems.reduce((acc, item) => {
    const price = parseFloat(item.price);
    if (isNaN(price)) {
      console.warn(`Could not parse the price of item: ${item.name}`);
      return acc;
    }
    return acc + price;
  }, 0);

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post("/checkout/payment", {
          amount: 500,
        });
        navigate.push("/success", {
          stripeData: res.data,
          products: cart,
        });
      } catch {}
    };
    makeRequest();
  }, [cart.total, navigate]);

  return (
    <CheckoutWrapper>
      <Subtotal subtotal={subtotal} />
      <CheckoutContainerRight>
        <CheckoutContainerLeftHeader>محتوى السلة</CheckoutContainerLeftHeader>
        {basketItems.map((item, index) => (
          <BasketItem key={index}>
            <BasketItemImg src={item.image} alt={item.name} />
            <BasketItemInfo>
              <BasketItemPara style={{ color: "#2946b6", fontSize: "20px" }}>
                {item.name}
              </BasketItemPara>
              <BasketItemPara style={{ color: "#000000", fontSize: "18px" }}>
                {item.price} ريال{" "}
              </BasketItemPara>
              <BasketButton
                primary
                onClick={() => handleRemoveFromBasket(index)}
              >
                ازالة المنتج
              </BasketButton>
            </BasketItemInfo>
          </BasketItem>
        ))}
      </CheckoutContainerRight>
    </CheckoutWrapper>
  );
};

export default Basket;
