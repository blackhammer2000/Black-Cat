const products = {
  retail: [
    {
      image: "../images/products/images (1).jpg",
      price: 1200,
      name: "Friskies",
      description: "New Mouse Flavour",
      state: "new",
    },
    {
      image: "../images/products/images.jpg",
      price: 1200,
      name: "Friskies",
      description: "Stuffed and Sauced",
      state: null,
    },
    {
      image: "../images/products/images (1).jpg",
      price: 1200,
      name: "Friskies",
      description: "New Mouse Flavour",
      state: "new",
    },
    {
      image: "../images/products/images.jpg",
      price: 1200,
      name: "Friskies",
      description: "Stuffed and Sauced",
      state: null,
    },
    {
      image: "../images/products/images.jpg",
      price: 1200,
      name: "Friskies",
      description: "Stuffed and Sauced",
      state: null,
    },
  ],
  wholesale: [
    {
      image:
        "../images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
    {
      image:
        "../images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
    {
      image:
        "../images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
    {
      image:
        "../images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
    {
      image:
        "../images/products/wholesale-products/a4f74087-eaeb-4d0b-9f99-010586c2e8bb.jpeg",
      price: 6500,
      name: "Meow Mix",
      description: "Original Choice",
    },
  ],
};

window.onload = () => {
  const filletSectionBody = document.querySelectorAll(
    "[data-fillet-category-body]"
  );
  filletSectionBody.forEach((div) => {
    renderProducts(products.retail.reverse(), div);
  });
};

function renderProducts(products, body) {
  const fragment = document.createDocumentFragment();

  products.forEach((item, index) => {
    const product = createProductCard(item, index);
    fragment.append(product);
  });

  body.append(fragment);
}

function createProductCard(item, index) {
  // create the whole product card
  const product = document.createElement("div");

  product.style.transform = `translateX(400px) scale(0.2)`;
  product.style.animation = `slideInRight 0.5s ease-in-out forwards ${
    (index + 2) / 10
  }s`;
  product.style.transition = `animation ${(index + 2) / 10}s ease-in-out`;

  product.className = "product card mx-3 border p-2";

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

  // create the product buttons div and append it to the product card
  const productButtons = document.createElement("div");
  productButtons.className =
    "product-buy-button mt-4 d-flex justify-content-between w-100 align-items-center h-auto border-top pt-4";
  const button = document.createElement("button");
  button.className = "btn btn-warning w-50";
  const cartIcon = document.createElement("i");
  cartIcon.className = "fa fa-shopping-cart";
  button.append(cartIcon);
  productButtons.append(button);

  const icons = document.createElement("div");
  icons.className =
    "icons d-flex justify-content-between align-items-around  w-50 ml-4 p-3";
  const favIcon = document.createElement("i");
  favIcon.className = "fa fa-heart";
  const plusIcon = document.createElement("i");
  plusIcon.className = "fa fa-plus";
  icons.append(plusIcon);
  icons.append(favIcon);
  productButtons.append(icons);
  product.append(productButtons);

  const newBadge = document.createElement("div");
  newBadge.className = "badge-warning new-badge p-1 text-white border-wavy";
  const newBadgeText = document.createTextNode("New");
  newBadge.append(newBadgeText);
  item.state === "new" ? product.append(newBadge) : null;

  return product;
}
