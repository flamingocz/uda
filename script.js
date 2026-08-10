const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector(".main-menu");

function closeMenu() {
  if (!menuButton || !menu) return;
  menu.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}

if (menuButton && menu) {
  menuButton.addEventListener("click", () => {
    const isOpen = menu.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  menu.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuButton.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 980) closeMenu();
  });
}
