const productList = document.getElementById("product-list");
const productThumb = document.querySelector(".product-thumb")

export function product1() {
  const glideConfig = {
    perView: 4,
    gap: 20,
    autoplay: 4000,
    bound: true,
    breakpoints: {
      992: {
        perView: 3,
      },
      768: {
        perView: 2,
      },
      576: {
        perView: 1,
      },
    },
  };

  productList && new Glide(".glide", glideConfig).mount();
}

const glideConfig2 = {
  type: "carousel",
  perView: 4,
  gap: 20,
  autoplay: 4000,
  breakpoints: {
    992: {
      perView: 3,
    },
    768: {
      perView: 2,
    },
    576: {
      perView: 1,
    },
  },
};

productList && new Glide(".glide2", glideConfig2).mount();

export function thumbsGallery() {
  const glideConfig3 = {
    perView: 5,
    gap: 20,
    breakpoints: {
      992: {
        perView: 3,
      },
    },
  };
  
  productThumb && new Glide(".glide3", glideConfig3).mount();
}
