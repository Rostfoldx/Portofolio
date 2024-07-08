const mode = document.querySelector("#mode");
const html = document.querySelector("html");

mode.addEventListener("click", () => {
  mode.checked ? html.classList.add("dark") : html.classList.remove("dark");
});
