let cart = localStorage.getItem("cart")
  ? JSON.parse(localStorage.getItem("cart"))
  : [];

function displayCartProduct() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  let result = "";

  cart.forEach((item) => {
    result += `
        <tr class="cart-item">
            <td></td>
            <td class="product-img">
                <img src=${item.img.singleImage} alt="" />
                <i class="i bi-x delete-cart" data-id=${item.id}></i>
            </td>
            <td>${item.name}</td>
            <td>${item.price.newPrice.toFixed(2)}₺</td>
            <td class="product-quantity">${item.quantity}</td>
            <td class="product-subtotal">${(
              item.price.newPrice * item.quantity
            ).toFixed(2)}₺</td>
        </tr>
        `;
  });
  cartWrapper.innerHTML = result;
  removeCartProduct();
}

displayCartProduct();

function removeCartProduct() {
  const deleteCarts = document.querySelectorAll(".delete-cart");
  const cartItems = document.querySelector(".header-cart-count");

  deleteCarts.forEach((button) => {
    button.addEventListener("click", (e) => {
      const id = Number(e.target.dataset.id);
      cart = cart.filter((item) => item.id !== id);
      displayCartProduct();
      localStorage.setItem("cart", JSON.stringify(cart));
      cartItems.innerHTML = cart.length;
      saveCartValues()
    });
  });
}

function saveCartValues() {
  const fastCargoDom = document.getElementById("fast-cargo");
  const subtotalDom = document.getElementById("subtotal");
  const cartTotalDom = document.getElementById("cart-total");

  let productsTotal = 0;

  cart.length > 0 &&
    cart.map((item) => (productsTotal += item.price.newPrice * item.quantity));

  subtotalDom.innerHTML = `${productsTotal.toFixed(2)}₺`;
  cartTotalDom.innerHTML = `${productsTotal.toFixed(2)}₺`;

  const fastCargoPrice = 80;

  fastCargoDom.addEventListener("change", (e) => {
    if (e.target.checked) {
      cartTotalDom.innerHTML = `${(productsTotal + fastCargoPrice).toFixed(2)}₺`;
    } else {
      cartTotalDom.innerHTML = `${productsTotal.toFixed(2)}₺`;
    }
  });
}

saveCartValues();
