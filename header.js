const menuIconButton = document.getElementById("icon-button");
const mobileMenu = document.getElementById("mobile-menu");

menuIconButton.addEventListener("click", () => {
  const windowWidth = window.innerWidth;

  if (windowWidth < 768) {
    const isVisible = getComputedStyle(mobileMenu).display !== "none";

    if (isVisible) {
      mobileMenu.style.display = "none";
    } else {
      mobileMenu.style.display = "block";
    }
  }
});

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;

  if (windowWidth >= 768) {
    mobileMenu.style.display = "none";
  }
});
