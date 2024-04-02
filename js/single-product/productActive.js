export function thumbActiveFunc() {
  const thumbs = document.querySelectorAll(".gallery-thumbs .glide__slide");
  const singleImg = document.querySelector("#single-img");

  thumbs.forEach((item) => {
    item.addEventListener("click", () => {
      thumbs.forEach((img) => {
        img.firstElementChild.classList.remove("active");
      });
      singleImg.src = item.firstElementChild.src;
      item.firstElementChild.classList.add("active");
    });
  });
}
