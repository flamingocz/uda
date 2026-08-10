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

const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const subject = data.get("subject");
    const body = [
      `Emri dhe Mbiemri: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Shteti i banimit: ${data.get("country")}`,
      `Numri i telefonit: ${data.get("phone") || "Nuk është dhënë"}`,
      "",
      data.get("message"),
    ].join("\n");

    window.location.href = `mailto:diasporabashke@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
