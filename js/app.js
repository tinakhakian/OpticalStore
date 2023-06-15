/**
 * WEB222 – Assignment 04
 *
 * I declare that this assignment is my own work in accordance with
 * Seneca Academic Policy. No part of this assignment has been
 * copied manually or electronically from any other source
 * (including web sites) or distributed to other students.
 *
 * Please update the following with your information:
 *
 *      Name:       <PARMIDA (TINA) KHAKIAN-DEHKORDI>
 *      Student ID: <133117226>
 *      Date:       <MARCH 24TH, 2023>
 */

// All of our data is available on the global `window` object.
// Create local variables to work with it in this file.
const { products, categories } = window;

// For debugging, display all of our data in the console
console.log({ products, categories }, "Store Data");

function createProductCard(product) {
  // Create a <div> to hold the card
  const card = document.createElement("div");
  // Add the .card class to the <div>
  card.classList.add("card");

  // Create a product image, use the .card-image class
  const productImage = document.createElement("img");
  productImage.src = product.imageUrl;
  productImage.alt = product.title;
  productImage.classList.add("card-image-front");
  productImage.style.width = "100%";
  productImage.style.height = "200px";
  card.appendChild(productImage);

  // Create a <div> to hold the product details
  const container = document.createElement("div");
  container.classList.add("container");
  card.appendChild(container);

  // Create a <div> to hold the back of the card
  const cardBack = document.createElement("div");
  cardBack.classList.add("flip-card-inner", "card-back");
  card.appendChild(cardBack);

  // Create a <div> to hold the product description
  const productDescContainer = document.createElement("div");
  productDescContainer.classList.add("product-desc");
  productDescContainer.innerHTML = product.description;
  cardBack.appendChild(productDescContainer);

  // Hide the product image in the card-back element
  productImage.classList.add("hide");

  // Create a <h4> element for the product title
  const productTitle = document.createElement("h4");
  productTitle.innerHTML = product.title;
  container.appendChild(productTitle);

  // Create a <p> element for the product price
  const productPrice = document.createElement("p");
  productPrice.innerHTML = "$" + product.price.toFixed(2);
  productPrice.classList.add("product-price");
  container.appendChild(productPrice);

  // Add event listener to flip the card when clicked
  card.addEventListener("click", function () {
    card.classList.toggle("active");
    setTimeout(function () {
      card.classList.toggle("active");
    }, 3000);
  });

  // Return the card's <div> element to the caller
  return card;
}

// Call the createProductCard function for each product and append the cards to the product container
// Get the element where you want to display the products
const productContainer = document.getElementById("category-products");

// Loop through the products array and create a card for each product
for (let i = 0; i < products.length; i++) {
  const product = products[i];
  const card = createProductCard(product);
  productContainer.appendChild(card);
}
