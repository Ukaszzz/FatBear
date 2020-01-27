const AMButton = document.querySelector(".AbMeButton");
const FButton = document.querySelector(".foodButton");
const CButton = document.querySelector(".ContactButton");

AMButton.addEventListener("click", () =>
  window.scrollTo({
    top:
      document.querySelector(".aboutMe").offsetTop - 0.1 * window.innerHeight,
    behavior: "smooth"
  })
);
FButton.addEventListener("click", () =>
  window.scrollTo({
    top: document.querySelector(".food").offsetTop - 0.1 * window.innerHeight,
    behavior: "smooth"
  })
);
CButton.addEventListener("click", () =>
  window.scrollTo({
    top:
      document.querySelector(".contact").offsetTop - 0.1 * window.innerHeight,
    behavior: "smooth"
  })
);
