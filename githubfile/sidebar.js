document.querySelector("button").addEventListener("click", () => {
  document.querySelector(".sidebar").classList.toggle("opened");
});

function toggle(menu) {
  menu.classList.toggle("toggled");
}
