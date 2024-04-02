import { thumbActiveFunc } from "./single-product/productActive.js";
import { thumbsGallery } from "./glide.js";
import zoomFunc  from "./single-product/zoom.js";
import colorsActiveFunc from "./single-product/colors.js";
import sizesActiveFunc from "./single-product/sizes.js";
import tabsFunc from "./single-product/tabs.js"
import commentsFunc from "./single-product/comments.js"

const productId = localStorage.getItem("productId")
  ? JSON.parse(localStorage.getItem("productId"))
  : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
  ? JSON.parse(localStorage.getItem("products"))
  : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find((item) => item.id === Number(productId));

// product title
const productTitle = document.querySelector(".product-title");
productTitle.innerHTML = findProduct.name;

// product price
const oldPriceDom = document.getElementById("old-price");
const newPriceDom = document.getElementById("new-price");

oldPriceDom.innerHTML = findProduct.price.oldPrice.toFixed(2) + "₺";
newPriceDom.innerHTML = findProduct.price.newPrice.toFixed(2) + "₺";

// product gallery
const singleImg = document.querySelector("#single-img");
singleImg.setAttribute("src", findProduct.img.singleImage);

const galleryThumbs = document.querySelector(".gallery-thumbs");

let result = "";
findProduct.img.thumbs.forEach((item) => {
  result += `
    <li class="glide__slide">
        <img
        src=${item}
        class="img-fluid"
        alt=""
        />
    </li>
    `;

});

galleryThumbs.innerHTML = result;
thumbsGallery()
thumbActiveFunc();

// add to cart
let cart = localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : []
const findCart = cart.find(item => item.id === findProduct.id)

const addToCartBtn = document.getElementById("add-to-cart")
const quantityDom = document.getElementById("quantity")
const cartItem = document.querySelector(".header-cart-count")

if(findCart){
  addToCartBtn.setAttribute("disabled", "disabled")
}else {
  addToCartBtn.addEventListener("click", (e) => {
    e.preventDefault()
    addToCartBtn.setAttribute("disabled", "disabled")
    cart.push({ ...findProduct, quantity: Number(quantityDom.value) })
    localStorage.setItem("cart", JSON.stringify(cart))
    cartItem.innerHTML = cart.length
  })
}
