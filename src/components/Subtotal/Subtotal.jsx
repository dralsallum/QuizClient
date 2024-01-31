import React from "react";
import {
  GiftButton,
  GiftContainer,
  Giftinput,
  Subtotalwrapper,
} from "./Subtotal.elements";
import { useNavigate } from "react-router-dom";

const Subtotal = ({ subtotal }) => {
  const navigate = useNavigate();

  const formattedSubtotal = new Intl.NumberFormat("ar-SA", {
    style: "currency",
    currency: "SAR", // Saudi Riyal
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(subtotal);

  return (
    <Subtotalwrapper>
      <p>
        مجموع المشتريات في السلة : <strong>{formattedSubtotal} </strong>
      </p>
      <GiftContainer>
        <Giftinput type="checkbox" /> هذا الطلب يحتوي هدية
      </GiftContainer>
      <GiftButton onClick={(e) => navigate("/payment")}>انتقل للدفع</GiftButton>
    </Subtotalwrapper>
  );
};

export default Subtotal;
