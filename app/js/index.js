const productsData = [
  {
    productId: "8b051a82-e051-11e4-afe5-00259036a192",
    priceRetail: 593,
    priceRetailAlt: 570.1695,
    priceGold: 576,
    priceGoldAlt: 553.824,
  },
  {
    productId: "dded02e3-135e-11e5-b9a9-00259036a192",
    priceRetail: 1336,
    priceRetailAlt: 927.7718,
    priceGold: 1283,
    priceGoldAlt: 890.9665,
  },
  {
    productId: "5a26045c-0a0c-11e6-bed3-00259036a192",
    priceRetail: 115,
    priceRetailAlt: 115,
    priceGold: 111,
    priceGoldAlt: 111,
    bonusAmount: 0,
  },
  {
    productId: "19d7362b-70d6-11e5-9d89-00259036a192",
    priceRetail: 743,
    priceRetailAlt: 498.657,
    priceGold: 714,
    priceGoldAlt: 479.194,
  },
  {
    productId: "46751ca7-ecdd-11e4-afe5-00259036a192",
    priceRetail: 409,
    priceRetailAlt: 284.026,
    priceGold: 397,
    priceGoldAlt: 275.6927,
  },
  {
    productId: "1f2f144c-3fea-11e5-b9a9-00259036a192",
    priceRetail: 627,
    priceRetailAlt: 627,
    priceGold: 609,
    priceGoldAlt: 609,
  },
  {
    productId: "3236fe2d-09fe-11e6-bed3-00259036a192",
    priceRetail: 1197,
    priceRetailAlt: 738.7884,
    priceGold: 1149,
    priceGoldAlt: 709.1628,
  },
  {
    productId: "da280b42-a23c-11e5-bed3-00259036a192",
    priceRetail: 230,
    priceRetailAlt: 212.9616,
    priceGold: 230,
    priceGoldAlt: 212.9616,
  },
];

document.addEventListener("DOMContentLoaded", () => {
  const productCards = document.querySelectorAll(".product_card");

  productCards.forEach((productCard) => {
    const priceTypeMeter = productCard.querySelector(
      ".product_price-type-meter"
    );
    const priceTypeBox = productCard.querySelector(".product_price-type-box");
    const productPriceClub = productCard.querySelector(".product_price-club");
    const productPrice = productCard.querySelector(".product_price");
    const productId = productCard
      .querySelector(".product_card-btn-add")
      .getAttribute("data-product-id");
    const product = findProductById(productId);

    priceTypeBox.addEventListener("click", () => {
      if (!priceTypeBox.classList.contains("active")) {
        priceTypeBox.classList.add("active");
        priceTypeMeter.classList.remove("active");
        productPriceClub.innerHTML = formatPrice(product.priceGold);
        productPrice.innerHTML = formatPrice(product.priceRetail);
      }
    });

    priceTypeMeter.addEventListener("click", () => {
      if (!priceTypeMeter.classList.contains("active")) {
        priceTypeMeter.classList.add("active");
        priceTypeBox.classList.remove("active");
        productPriceClub.innerHTML = formatPrice(product.priceGoldAlt);
        productPrice.innerHTML = formatPrice(product.priceRetailAlt);
      }
    });

    const counter = productCard.querySelector(".product_card-count");
    const minusBtn = productCard.querySelector(".product_card-btn--minus");
    const plusBtn = productCard.querySelector(".product_card-btn--plus");

    plusBtn.addEventListener("click", (e) => {
      if (counter.value + 1 > 1) {
        minusBtn.disabled = false;
      }

      counter.value = Number(counter.value) + 1;
    });

    minusBtn.addEventListener("click", (e) => {
      if (counter.value - 1 <= 1) {
        counter.value = Number(counter.value) - 1;
        minusBtn.disabled = true;
      } else {
        counter.value = Number(counter.value) - 1;
      }
    });
  });

  function findProductById(id) {
    return productsData.filter((product) => product.productId === id)[0];
  }

  function formatPrice(price) {
    let newPrice = String(price);

    if (newPrice.includes(".")) {
      newPrice = newPrice.split(".");

      if (newPrice[1].length < 2) {
        newPrice[1] = newPrice[1].padEnd(2, "0");
      } else {
        newPrice[1] = newPrice[1].substr(0, 2);
      }

      return newPrice.join(".");
    }

    newPrice += ".00";
    return newPrice;
  }
});
