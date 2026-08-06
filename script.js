const year = document.querySelector("#year");
if (year) year.textContent = new Date().getFullYear();

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-menu");

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}
