window.addEventListener("scroll", () => {
  const Scroll = window.scrollY;
  const lgNav = document.querySelectorAll(".menu li");

  if (Scroll > 1) {
    document.querySelector("#nav").classList.add("show");
    document.querySelector("#btnNav").classList.add("show2");
    lgNav.forEach((item) => {
      item.style.color = white;
    });
  } else {
    document.querySelector("#nav").classList.remove("show");
    document.querySelector("#btnNav").classList.remove("show2");
    lgNav.forEach((item) => {
      item.style.color = black;
    });
  }
});
