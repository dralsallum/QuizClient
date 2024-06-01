/* global ShopifyBuy */
import React, { useState, useEffect } from "react";
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
  "Whispers in the Rails": "7585039548478",
  "Friends Forever": "7585041612862",
  "Behind Grey Eyes": "7585043578942",
  "Beyond the clock": "7585044725822",
  "Shadows Over Maplewood": "9167548842143",
  "Winds of change": "9167549366431",
  "The Forgotten Realms": "9167707242655",
  "A Dystopian future": "9167688433823",
};

const Products = () => {
  const { name } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadShopifySDK = () => {
      const scriptURL =
        "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";
      const existingScript = document.querySelector(
        `script[src="${scriptURL}"]`
      );

      if (!existingScript) {
        const script = document.createElement("script");
        script.src = scriptURL;
        script.async = true;
        document.head.appendChild(script);
        script.onload = () =>
          initializeShopifyBuyButton(decodeURIComponent(name));
      } else {
        initializeShopifyBuyButton(decodeURIComponent(name));
      }
    };

    const initializeShopifyBuyButton = (productName) => {
      if (window.ShopifyBuy && window.ShopifyBuy.UI) {
        const client = ShopifyBuy.buildClient({
          domain: "dc1079-7d.myshopify.com",
          storefrontAccessToken: "16ed199bc02989cbd9a9083c474e6cf3",
        });

        ShopifyBuy.UI.onReady(client).then((ui) => {
          const shopifyId = shopifyProductIds[productName];
          if (!shopifyId) {
            console.error("Shopify product ID not found for", productName);
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
      }
    };
    if (product) {
      loadShopifySDK();
    }
  }, [product]);

  useEffect(() => {
    window.scrollTo(0, 0);
    const decodedName = decodeURIComponent(name);
    const foundProduct =
      data.find((p) => p.name === decodedName) ||
      Secdata.find((p) => p.name === decodedName);
    setProduct(foundProduct);
  }, [name]);

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
