import React, { useRef, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromBasket } from "../../redux/basketRedux";
import {
  BasketButton,
  BasketItem,
  BasketItemImg,
  BasketItemInfo,
  BasketItemPara,
  CheckoutContainerItems,
  CheckoutContainerLeftHeader,
  CheckoutContainerRight,
  PayAddressContainer,
  PayAddressPara,
  PayContainer,
  PaySection,
  PayTitle,
  PayTitleContainer,
  PayWrapper,
  PayWrapperTitle,
  TransCon,
  TransPara,
  TransTitle,
} from "./Pay.elements";
import { getStorage } from "firebase/storage";
import axios from "axios";
import { useNavigate } from "react-router-dom";

async function postImage({ image, description }) {
  try {
    const formData = new FormData();
    formData.append("image", image);
    formData.append("description", description);

    const result = await axios.post(
      "https://agency-saudi-688c7ddad04b.herokuapp.com/images",
      formData,
      {
        headers: { "Content-Type": "application/pdf" },
      }
    );
    return result.data;
  } catch (error) {
    console.error("Error posting image:", error);
    throw error; // rethrow the error for further handling if necessary
  }
}

const Pay = () => {
  const currentUser = useSelector((state) => state.user.currentUser);
  const basketItems = useSelector((state) => state.basket.basketItems);
  const dispatch = useDispatch();
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("ارفق الملف");
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const fileRef = useRef(null);
  const navigate = useNavigate();

  const submit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const result = await postImage({ image: file, description });
      setImages([result.image, ...images]);
      setUploadSuccess(true);
      setTimeout(() => navigate("/"), 2000); // Navigate after 3 seconds
    } catch (error) {
      console.error("Error posting image:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const storage = getStorage();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
    }
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
    setFileName(file ? `Selected: ${file.name}` : "Upload PDF");
  };
  return (
    <PayWrapper>
      <PayWrapperTitle>منطقة البيع</PayWrapperTitle>
      <PayContainer>
        <CheckoutContainerRight>
          <CheckoutContainerLeftHeader>محتوى السلة</CheckoutContainerLeftHeader>
          <CheckoutContainerItems>
            {basketItems.map((item, index) => (
              <BasketItem key={index}>
                <BasketItemImg src={item.image} alt={item.name} />
                <BasketItemInfo>
                  <BasketItemPara
                    style={{ color: "#2946b6", fontSize: "20px" }}
                  >
                    {item.name}
                  </BasketItemPara>
                  <BasketItemPara
                    style={{ color: "#000000", fontSize: "18px" }}
                  >
                    {item.price} ريال{" "}
                  </BasketItemPara>
                  <BasketButton primary onClick={() => removeFromBasket(index)}>
                    ازالة المنتج
                  </BasketButton>
                </BasketItemInfo>
              </BasketItem>
            ))}
          </CheckoutContainerItems>
        </CheckoutContainerRight>
        <PaySection>
          <PayTitleContainer>
            <PayTitle>طريقة الدفع</PayTitle>
          </PayTitleContainer>
          <PayAddressContainer>
            <form onSubmit={submit}>
              <TransCon>
                <TransTitle>تحويل المبلغ</TransTitle>
                <TransPara>ارفع صورة لفاتورة التحويل البنكي</TransPara>

                <input
                  id="file-upload"
                  type="file"
                  accept="pdf/*"
                  onChange={fileSelected}
                />
                <button type="submit">ارفع الملف</button>
              </TransCon>
            </form>
          </PayAddressContainer>
        </PaySection>
      </PayContainer>
    </PayWrapper>
  );
};

export default Pay;
