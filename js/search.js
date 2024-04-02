function productRoute() {
  const resultItems = document.querySelectorAll(".results .result-item");

  resultItems.forEach((item) => {
    item.addEventListener("click", () => {
      const id = item.dataset.id;
      if (id) {
        localStorage.setItem("productId", JSON.stringify(id));
        window.location.href = "./single-product.html";
      }
    });
  });
}

function searchFunc(data) {
  const searchResultsDom = document.querySelector(".search-results .results");

  let result = "";
  data.forEach((item) => {
    result += `
        <a href="#" class="result-item" data-id="${item.id}">
            <img src=${item.img.singleImage} class="search-thumb" alt="">
            <div class="search-info">
                <h4>${item.name}</h4>
                <span class="search-sku">SKU: BE45VGRT</span>
                <span class="search-price">${item.price.newPrice.toFixed(
                  2
                )}₺</span>
            </div>
        </a>
        `;
  });
  searchResultsDom.innerHTML = result;
  productRoute();

    const searchInput = document.querySelector(".search-form input");
    let value;
    let filtered = [];

    searchInput.addEventListener("input", (e) => {
      value = e.target.value;
      value = e.target.value.trim().toLowerCase();
      filtered = data.filter((item) =>
        item.name.trim().toLowerCase().includes(value)
      );

      let result = "";

      if (filtered.length < 2) {
        searchResultsDom.style.gridTemplateColumns = "1fr";
        if (filtered.length === 0) {
          console.log(searchResultsDom);
          searchResultsDom.innerHTML = `
          <div class="result-item" style="justify-content: center">
              Aradığınız ürün bulunamadı :(
          </div>`
        }
        filtered.forEach((item) => {
          result += `
              <a href="#" class="result-item" data-id="${item.id}">
                  <img src=${
                      item.img.singleImage
                  } class="search-thumb" alt="">
                  <div class="search-info">
                      <h4>${item.name}</h4>
                      <span class="search-sku">SKU: BE45VGRT</span>
                      <span class="search-price">${item.price.newPrice.toFixed(
                          2
                      )}₺</span>
                  </div>
              </a>
              `;
          searchResultsDom.innerHTML = result;
          productRoute();
        });
      } else {
        
        if(innerWidth < 992){
            searchResultsDom.style.gridTemplateColumns = "1fr";
        }else {
            searchResultsDom.style.gridTemplateColumns = "1fr 1fr";
        }
        
        filtered.forEach((item) => {
          result += `
                  <a href="#" class="result-item" data-id="${item.id}">
                      <img src=${
                      item.img.singleImage
                      } class="search-thumb" alt="">
                      <div class="search-info">
                          <h4>${item.name}</h4>
                          <span class="search-sku">SKU: BE45VGRT</span>
                          <span class="search-price">${item.price.newPrice.toFixed(
                          2
                          )}₺</span>
                      </div>
                  </a>
              `;
          searchResultsDom.innerHTML = result;
          productRoute();
        });
      }
    });
}

export default searchFunc;
