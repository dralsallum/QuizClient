/* global ShopifyBuy */
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketRedux";
import { useParams } from "react-router-dom";
import {
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
    "https://alsallum.s3.eu-north-1.amazonaws.com/shadows.jpg",
  "Winds of change": "https://alsallum.s3.eu-north-1.amazonaws.com/winds.jpg",
  "The Forgotten Realms":
    "https://alsallum.s3.eu-north-1.amazonaws.com/forgetten.jpg",
  "A Dystopian future":
    "https://alsallum.s3.eu-north-1.amazonaws.com/Dystopian.jpg",
};

const shopifyProductIds = {
  "Whispers in the Rails": "9167704752287",
  "Friends Forever": "9167705276575",
  "Behind Grey Eyes": "9167705931935",
  "Beyond the clock": "9167706620063",
  "Shadows Over Maplewood": "9167548842143",
  "Winds of change": "9167549366431",
  "The Forgotten Realms": "9167707242655",
  "A Dystopian future": "9167688433823",
};

const Products = () => {
  const { name } = useParams();
  const [number, setNumber] = useState(1);
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadShopifySDK = () => {
      const scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      if (!document.querySelector(`script[src="${scriptURL}"]`)) {
        const script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;
        document.head.appendChild(script);
        script.onload = initializeShopifyBuyButton;
      } else if (window.ShopifyBuy) {
        initializeShopifyBuyButton();
      }
    };

    const initializeShopifyBuyButton = () => {
      if (window.ShopifyBuy) {
        if (window.ShopifyBuy.UI) {
          buildShopifyButton();
        }
      } else {
        const scriptURL =
          "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
        const script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;
        document.head.appendChild(script);
        script.onload = () => {
          if (window.ShopifyBuy) {
            if (window.ShopifyBuy.UI) {
              buildShopifyButton();
            }
          }
        };
      }
    };

    const buildShopifyButton = () => {
      const client = ShopifyBuy.buildClient({
        domain: "ec56aa-4.myshopify.com",
        storefrontAccessToken: "6e9ee9bb674850fe85217bb059ded6c3",
      });

      ShopifyBuy.UI.onReady(client).then((ui) => {
        // Step 2: Use the mapped Shopify product ID
        const shopifyId = shopifyProductIds[decodeURIComponent(name)];
        if (!shopifyId) {
          console.error("Shopify product ID not found for", name);
          return;
        }
        ui.createComponent("product", {
          id: shopifyId,
          node: document.getElementById("product-component-1707638219372"),
          moneyFormat: "%24%7B%7Bamount%7D%7D",
          options: {
            product: {
              buttonDestination: "cart",
              contents: {
                img: false,
                title: false,
                price: false,
                options: false,
                quantity: false,
                button: true,
              },
              text: {
                button: "اضافة للسلة",
              },
              styles: {
                button: {
                  "background-color": "#2946b6",
                  padding: "8px 20px",
                  width: "100%",
                  "box-shadow": "4px 4px 10px rgba(0, 0, 0, 1)",
                  color: "#ffffff",
                  ":hover": {
                    "background-color": "#2946b6",
                    color: "#ffffff",
                  },
                  "border-radius": "5px",
                  ":focus": {
                    "background-color": "#2946b6",
                  },
                },
                product: {
                  "text-align": "left",
                  "@media (min-width: 601px)": {
                    "max-width": "100%",
                    "margin-left": "0",
                    "margin-bottom": "0px",
                  },
                },
              },
            },
            cart: {
              startOpen: false,
              popup: false,
              styles: {
                button: {
                  "background-color": "#2946b6",
                  color: "#ffffff",
                  ":hover": {
                    "background-color": "#2946b6",
                    color: "#ffffff",
                  },
                  "border-radius": "5px",
                  ":focus": {
                    "background-color": "#2946b6",
                  },
                },
              },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#2946b6",
                  color: "#ffffff",
                  ":hover": {
                    "background-color": "#2946b6",
                    color: "#ffffff",
                  },
                  ":focus": {
                    "background-color": "#2946b6",
                  },
                },
                count: {
                  color: "#ffffff",
                  ":hover": {
                    color: "#ffffff",
                  },
                },
              },
            },
          },
        });
      });
    };
    loadShopifySDK();
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const decodedName = decodeURIComponent(name);
    const foundProduct =
      data.find((p) => p.name === decodedName) ||
      Secdata.find((p) => p.name === decodedName);
    setProduct(foundProduct);
  }, [name]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const decodedName = decodeURIComponent(name);
    const primaryProduct = data.find((p) => p.name === decodedName);
    const secondaryProduct = !primaryProduct
      ? Secdata.find((p) => p.name === decodedName)
      : null;
    setProduct(primaryProduct || secondaryProduct);
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
            <h3>٤٩ريال (نسخة الكترونية)</h3>
          </div>
          <ProductNumberContainer>
            <div id="product-component-1707638219372"></div>
          </ProductNumberContainer>
        </ProductContainerRight>
      </ProductContainer>
      <FooterMe />
    </>
  );
};

export default Products;
