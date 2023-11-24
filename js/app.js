const products = {
  retail: [
    {
      image: "./images/products/images (1).jpg",
      price: 1200,
      name: "Friskies",
      description: "New Mouse Flavour",
      state: "new",
    },
    {
      image: "./images/products/images.jpg",
      price: 1200,
      name: "Friskies",
      description: "Stuffed and Sauced",
      state: null,
    },
    {
      image: "./images/products/images (1).jpg",
      price: 1200,
      name: "Friskies",
      description: "New Mouse Flavour",
      state: "new",
    },
    {
      image: "./images/products/images.jpg",
      price: 1200,
      name: "Friskies",
      description: "Stuffed and Sauced",
      state: null,
    },
    {
      image: "./images/products/images.jpg",
      price: 1200,
      name: "Friskies",
      description: "Stuffed and Sauced",
      state: null,
    },
    {
      image: "./images/products/images.jpg",
      price: 1200,
      name: "Friskies",
      description: "Stuffed and Sauced",
      state: null,
    },
  ],
  wholesale: [
    {
      image:
        "./images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
    {
      image:
        "./images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
    {
      image:
        "./images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
    {
      image:
        "./images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
    {
      image:
        "./images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
  ],
};

const recommendedBody = document.querySelector(
  "[data-best-seller-category-body]"
);
const newRecipeBody = document.querySelector("[data-wholesale-category-body]");

// console.table(recommendedBody, newRecipeBody);
renderCartBadgeNumber();
renderProducts(products.retail, recommendedBody);
renderProducts(products.wholesale, newRecipeBody);

const searchIcon = document.querySelector("[data-search-icon]");
const searchBar = document.querySelector("[data-search-bar]");

searchIcon.addEventListener("click", (e) => {
  e.preventDefault();
  searchBar.classList.toggle("show");
});

const increaseQuantityButtons = document.querySelectorAll("[data-add-items]");
increaseQuantityButtons.forEach((button) => {
  button.addEventListener("click", (e) => {});
});

const addToCartButtons = document.querySelectorAll(".add-to-cart");
addToCartButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    e.preventDefault();
    const product_name =
      e.target.parentElement.parentElement.parentElement.children[1].innerText;
    const product_quantity = parseInt(
      window
        .getComputedStyle(button, "::after")
        .getPropertyValue("content")
        .replace(/\W/g, "")
    );
    const product_price = parseInt(
      e.target.parentElement.parentElement.previousElementSibling.children[2].children[0].innerText
        .replace(/[a-z. \,]/gi, "")
        .trim()
    );
    const product_image =
      e.target.parentElement.parentElement.previousElementSibling.children[0]
        .children[0].src;

    const cart = JSON.parse(localStorage.getItem("blackcat-cart")) || [];

    const cartItem = {
      product_name,
      product_price,
      product_quantity,
      product_image,
    };

    cart.push(cartItem);
    localStorage.setItem("blackcat-cart", JSON.stringify(cart));
    renderCartBadgeNumber();
  });
});
console.log(addToCartButtons);

function renderProducts(products, body) {
  const fragment = document.createDocumentFragment();

  products.forEach((item, index) => {
    const product = createProductCard(item, index, body);
    fragment.append(product);
  });

  body.append(fragment);
}

function createProductCard(item, index, body) {
  // create the whole product card
  const product = document.createElement("div");

  product.style.transform = `translateX(400px) scale(0.2)`;
  product.style.animation = `slideInRight 1s ease-in-out forwards ${
    (index + 2) / 10
  }s`;
  product.style.transition = `animation ${(index + 2) / 10}s ease-in-out`;

  product.className =
    item.state === "new" || body.classList.contains("new-recipe")
      ? "product  mx-3 border p-2 new"
      : "product  mx-3 border p-2";

  // create the image div and append it to the product card
  const productImage = document.createElement("div");
  productImage.className =
    "d-flex justify-content-center align-items-center product-image w-100 border-bottom py-4";
  const img = document.createElement("img");
  img.src = `${item.image}`;
  productImage.append(img);
  product.append(productImage);

  // create description div and append it to the product card
  const productDescription = document.createElement("div");
  productDescription.className =
    "product-description mt-3 text-center text-dark d-flex w-100 text-wrap justify-content-center align-items-center card-description font-italic";
  const descriptionContainer = document.createElement("h5");
  const description = document.createTextNode(
    `${item.name} ${item.description}`
  );
  descriptionContainer.append(description);
  productDescription.append(descriptionContainer);
  product.append(productDescription);

  // create the price div and append it to the product card
  const productPrice = document.createElement("div");
  productPrice.className =
    "product-price mt-2 text-center w-100 bg-dark text-warning d-flex justify-content-center align-items-center font-italic border pt-1";
  const priceTag = document.createElement("h6");
  const price = document.createTextNode(`Ksh. ${item.price.toLocaleString()}`);
  priceTag.append(price);
  productPrice.append(priceTag);
  product.append(productPrice);

  // create the product buttons and badge div and append it to the product card
  const productButtons = document.createElement("div");
  productButtons.className =
    "product-buy-button mt-4 d-flex justify-content-between w-100 align-items-center h-auto border-top pt-4";

  const cartButtonContainer = document.createElement("div");
  cartButtonContainer.className = "add-to-cart border border-danger w-100";
  const button = document.createElement("button");
  button.className = "btn btn-warning w-100 ";
  const cartCounter = document.createElement("div");
  cartCounter.className = ".add-to-cart-after border border-danger";
  const cartIcon = document.createElement("i");
  cartIcon.className = "fa fa-shopping-cart";
  button.append(cartIcon);
  cartButtonContainer.append(cartCounter);
  cartButtonContainer.append(button);
  productButtons.append(cartButtonContainer);

  const icons = document.createElement("div");
  icons.className =
    "icons d-flex justify-content-between align-items-around  w-75 ml-4 p-3 ";
  const favIcon = document.createElement("i");
  favIcon.className = "fa fa-heart";
  const plusIcon = document.createElement("i");
  plusIcon.className = "fa fa-plus";
  const minusIcon = document.createElement("i");
  minusIcon.className = "fa fa-minus mx-4";
  icons.append(plusIcon);
  icons.append(minusIcon);
  icons.append(favIcon);
  productButtons.append(icons);
  product.append(productButtons);

  const newBadge = document.createElement("div");
  newBadge.className = "badge-warning new-badge p-1 text-white border-wavy";
  const newBadgeText = document.createTextNode("New");
  newBadge.append(newBadgeText);
  product.classList.contains("new") ? product.append(newBadge) : null;

  return product;
}

function renderCartBadgeNumber() {
  const cart = document.querySelector("[data-cart]");
  const cartBadge = cart.querySelector("[data-badge]");
  const itemsInCart = JSON.parse(localStorage.getItem("blackcat-cart"))
    ? JSON.parse(localStorage.getItem("blackcat-cart")).length
    : 0;
  cartBadge.innerText = itemsInCart ? itemsInCart : "";
  parseInt(cartBadge.innerText) > 0
    ? (cartBadge.style.display = "grid")
    : (cartBadge.style.display = "none");
}
