let prevScrollPos = window.scrollY;
const lgNav = document.querySelectorAll(".lgNav");

window.addEventListener("scroll", () => {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos < currentScrollPos) {
    document.querySelector("#nav").classList.add("show");
    document.querySelector("#btnNav").classList.add("show2");
    for (let i = 0; i < lgNav.length; i++) {
      lgNav[i].classList.add("show2");
    }
  } else {
    document.querySelector("#nav").classList.remove("show");
    document.querySelector("#btnNav").classList.remove("show2");
    lgNav[i].classList.add("show3");
  }
});
