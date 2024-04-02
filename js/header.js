function sidebarFunc() {
  // home sidebar start
  const hamburgerMobile = document.querySelector("#hamburger-mobile");
  const mobileHeader = document.querySelector("#mobile-header");
  const mobileClose = document.querySelector("#mobile-close");

  hamburgerMobile.addEventListener("click", () => {
    mobileHeader.style.left = "0";
  });
  mobileClose.addEventListener("click", () => {
    mobileHeader.style.left = "-100%";
  });

  // click outside start
  document.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(mobileHeader) &&
      !e.composedPath().includes(hamburgerMobile)
    ) {
      mobileHeader.style.left = "-100%";
    }
  });
  // click outside end
  // header sidebar end
}

function modalSearchFunc() {
  // modal search start
  const searchButton = document.querySelector(".search-button");
  const modalSearch = document.querySelector(".modal-search");
  const modalClose = document.querySelector("#modal-close");
  const modalWrapper = document.querySelector(".modal-wrapper");

  searchButton.addEventListener("click", () => {
    modalSearch.style.opacity = "1";
    modalSearch.style.visibility = "visible";
  });

  modalClose.addEventListener("click", () => {
    modalSearch.style.opacity = "0";
    modalSearch.style.visibility = "hidden";
  });

  // modal outside start
  document.addEventListener("click", (e) => {
    if (
      !e.composedPath().includes(modalWrapper) &&
      !e.composedPath().includes(searchButton)
    ) {
      modalSearch.style.visibility = "hidden";
    }
  });
  // modal outside start
  // modal search end
}

function headerFunc() {
    sidebarFunc()
    modalSearchFunc()
}

export default headerFunc()