const cartItems = JSON.parse(localStorage.getItem("blackcat-cart")) || [];
const tableBody = document.querySelector("tbody");
const fragment = document.createDocumentFragment();
const prices = [];

cartItems.forEach((product) => {
  const row = document.createElement("tr");
  const imageCell = document.createElement("td");
  const imageElement = document.createElement("img");
  imageElement.src = product.product_image;
  imageElement.style.width = "150px";
  imageCell.append(imageElement);

  const nameCell = document.createElement("td");
  const pName = product.product_name;
  nameCell.textContent = pName.slice(0, pName.indexOf("Ksh."));

  const priceCell = document.createElement("td");
  priceCell.textContent = `Ksh. ${product.product_price}`;
  prices.push(product.product_price * product.product_quantity);

  const quantityCell = document.createElement("td");
  quantityCell.textContent = product.product_quantity;

  row.append(imageCell);
  row.append(nameCell);
  row.append(priceCell);
  row.append(quantityCell);

  fragment.append(row);
});

tableBody.append(fragment);

const total = document.querySelector("[data-total]");
const totalPrice = prices.reduce((a, b) => a + b);
total.innerText = `Total: ksh. ${totalPrice.toLocaleString()}`;
