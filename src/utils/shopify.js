/* global ShopifyBuy */
const initializeShopifyButtons = (products, refs) => {
  const scriptURL =
    "https://sdks.shopifycdn.com/buy-button/latest/buy-button-storefront.min.js";

  if (window.ShopifyBuy && window.ShopifyBuy.UI) {
    ShopifyBuyInit();
  } else {
    if (!document.querySelector(`script[src="${scriptURL}"]`)) {
      loadScript();
    } else {
      document.querySelector(`script[src="${scriptURL}"]`).onload =
        ShopifyBuyInit;
    }
  }

  function loadScript() {
    const script = document.createElement("script");
    script.async = true;
    script.src = scriptURL;
    script.onerror = () => {
      console.error("Failed to load Shopify Buy Button script.");
      // Retry loading the script after a delay
      setTimeout(loadScript, 3000);
    };
    document.head.appendChild(script);
    script.onload = ShopifyBuyInit;
  }

  function ShopifyBuyInit() {
    const client = ShopifyBuy.buildClient({
      domain: "dc1079-7d.myshopify.com",
      storefrontAccessToken: "16ed199bc02989cbd9a9083c474e6cf3",
    });

    ShopifyBuy.UI.onReady(client).then((ui) => {
      products.forEach((plan) => {
        ui.createComponent("product", {
          id: plan.productId,
          node: refs.current[plan.id],
          moneyFormat: "%7B%7Bamount%7D%7D%20SR",
          options: {
            product: {
              iframe: false,
              contents: {
                title: false,
                price: false,
                description: false,
                img: false,
                imgWithCarousel: false,
                button: true,
              },
              styles: {
                product: {
                  "@media (min-width: 601px)": {
                    "max-width": "calc(25% - 20px)",
                    "margin-left": "20px",
                    "margin-bottom": "50px",
                  },
                },
                button: {
                  ":hover": { "background-color": "#4c32c6" },
                  "background-color": "#5438dc",
                  ":focus": { "background-color": "#4c32c6" },
                },
              },
              text: {
                button: "اضافة للسلة",
              },
            },
            cart: {
              styles: {
                button: {
                  ":hover": { "background-color": "#4c32c6" },
                  "background-color": "#5438dc",
                  ":focus": { "background-color": "#4c32c6" },
                },
              },
              text: {
                total: "المجموع",
                button: "الدفع",
              },
            },
            toggle: {
              styles: {
                toggle: {
                  "background-color": "#5438dc",
                  ":hover": { "background-color": "#4c32c6" },
                  ":focus": { "background-color": "#4c32c6" },
                },
              },
            },
          },
        });
      });
    });
  }
};

export default initializeShopifyButtons;
