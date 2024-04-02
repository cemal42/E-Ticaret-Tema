import header from "./header.js";
import productsFunc from "./products.js";
import searchFunc from "./search.js";

// add product to localStorage start
(async () => {
  const response = await fetch("../js/data.json");
  const data = await response.json();

  data ? localStorage.setItem("products", JSON.stringify(data)) : [];

  productsFunc(data);
  searchFunc(data)
})()
// add product to localStorage end

// add cartItems to localStorage start
const cartItems = document.querySelector(".header-cart-count");

cartItems.innerHTML = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart")).length
  : "0";
// add cartItems to localStorage end

// modal dialog start
const modalClose = document.querySelector(".modal-close i")
const modalDialog = document.querySelector(".modal-dialog")
const modalContent = document.querySelector(".modal-dialog-wrapper")

modalClose.addEventListener("click", () => {
  modalDialog.classList.remove("show")
})

document.addEventListener("click", (e) => {
  if(!e.composedPath().includes(modalContent)) {
    modalDialog.classList.remove("show")
  }
})

setTimeout(() => {
  modalDialog.classList.add("show")
}, 3000);
// modal dialog end