import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketRedux";
import { useParams } from "react-router-dom";
import {
  ProductAdd,
  ProductContainer,
  ProductContainerLeft,
  ProductContainerRight,
  ProductHeader,
  ProductImg,
  ProductNumberContainer,
} from "./Product.elements";
import data from "../../utils/slider.json";
import Secdata from "../../utils/SecSlider.json";
import { FooterMe, NavTech } from "..";

const imageMapping = {
  "Whispers in the Rails":
    "https://alsallum.s3.eu-north-1.amazonaws.com/Whispers+in+the+Rails.jpg",
  "Friends Forever":
    "https://alsallum.s3.eu-north-1.amazonaws.com/friends+forever.jpg",
  "Behind Grey Eyes":
    "https://alsallum.s3.eu-north-1.amazonaws.com/Behind+grey+eye.jpg",
  "Beyond the clock":
    "https://alsallum.s3.eu-north-1.amazonaws.com/Beyond+the+clock.jpg",
  "Shadows Over Maplewood":
    "https://alsallum.s3.eu-north-1.amazonaws.com/shadows.png",
  "Winds of change": "https://alsallum.s3.eu-north-1.amazonaws.com/Winds.png",
  "The Forgotten Realms":
    "https://alsallum.s3.eu-north-1.amazonaws.com/forgetten.png",
  "A Dystopian future":
    "https://alsallum.s3.eu-north-1.amazonaws.com/Dystopian.png",
};

const Products = () => {
  const { name } = useParams();
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const decodedName = decodeURIComponent(name);
    const foundProduct = data.find((p) => p.name === decodedName);
    setProduct(foundProduct);
  }, [name]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const decodedName = decodeURIComponent(name);
    const foundSecProduct = Secdata.find((p) => p.name === decodedName);
    setProduct(foundSecProduct);
  }, [name]);

  const handleAddToBasket = () => {
    const item = {
      name: product.name,
      price: product.price * number,
      image: imageMapping[product.name],
      quantity: number,
    };
    dispatch(addToBasket(item));
  };

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <NavTech />
      <ProductContainer>
        <ProductContainerLeft>
          <ProductImg src={imageMapping[product.name]} alt={product.name} />
        </ProductContainerLeft>
        <ProductContainerRight>
          <ProductHeader>{product.name}</ProductHeader>
          <div>
            <h3>(نسخة الكترونية)</h3>
          </div>
          <ProductNumberContainer>
            <ProductAdd onClick={handleAddToBasket}>
              اضافة للسلة - {product.price * number} ريال
            </ProductAdd>
          </ProductNumberContainer>
        </ProductContainerRight>
      </ProductContainer>
      <FooterMe />
    </>
  );
};

export default Products;
