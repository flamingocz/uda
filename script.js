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
/* =========================
   GALERIA / LIGHTBOX
   ========================= */

const galleryImages = document.querySelectorAll(".carousel-grid img");

if (galleryImages.length) {
  // Krijojmë dritaren e galerisë
  const lightbox = document.createElement("div");
  lightbox.className = "gallery-lightbox";
  lightbox.innerHTML = `
    <button class="gallery-lightbox-close" type="button" aria-label="Mbyll galerine">×</button>
    <button class="gallery-lightbox-prev" type="button" aria-label="Fotoja e mëparshme">‹</button>
    <img class="gallery-lightbox-image" src="" alt="">
    <button class="gallery-lightbox-next" type="button" aria-label="Fotoja tjetër">›</button>
    <div class="gallery-lightbox-counter"></div>
  `;

  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector(".gallery-lightbox-image");
  const closeButton = lightbox.querySelector(".gallery-lightbox-close");
  const prevButton = lightbox.querySelector(".gallery-lightbox-prev");
  const nextButton = lightbox.querySelector(".gallery-lightbox-next");
  const counter = lightbox.querySelector(".gallery-lightbox-counter");

  // Mbajmë fotot e secilës galeri veçmas
  let currentGallery = [];
  let currentIndex = 0;

  function showImage(index) {
    if (!currentGallery.length) return;

    currentIndex =
      (index + currentGallery.length) % currentGallery.length;

    const image = currentGallery[currentIndex];

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt || "";

    counter.textContent =
      `${currentIndex + 1} / ${currentGallery.length}`;
  }

  function openGallery(clickedImage) {
    const gallery = clickedImage.closest(".carousel-grid");

    if (!gallery) return;

    currentGallery = Array.from(
      gallery.querySelectorAll("img")
    );

    currentIndex = currentGallery.indexOf(clickedImage);

    showImage(currentIndex);

    lightbox.classList.add("is-open");
    document.body.style.overflow = "hidden";
  }

  function closeGallery() {
    lightbox.classList.remove("is-open");
    document.body.style.overflow = "";
  }

  function showPrevious() {
    showImage(currentIndex - 1);
  }

  function showNext() {
    showImage(currentIndex + 1);
  }

  // Klik mbi foto
  galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
      openGallery(image);
    });
  });

  // Butonat
  closeButton.addEventListener("click", closeGallery);
  prevButton.addEventListener("click", showPrevious);
  nextButton.addEventListener("click", showNext);

  // Klik në sfond
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeGallery();
    }
  });

  // Tastiera
  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("is-open")) return;

    if (event.key === "Escape") {
      closeGallery();
    }

    if (event.key === "ArrowLeft") {
      showPrevious();
    }

    if (event.key === "ArrowRight") {
      showNext();
    }
  });

  // Swipe në telefon
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].screenX;
    },
    { passive: true }
  );

  lightbox.addEventListener(
    "touchend",
    (event) => {
      touchEndX = event.changedTouches[0].screenX;

      const difference = touchStartX - touchEndX;

      if (Math.abs(difference) < 50) return;

      if (difference > 0) {
        showNext();
      } else {
        showPrevious();
      }
    },
    { passive: true }
  );
}
