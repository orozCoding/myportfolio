let menuOverlay = document.querySelector("#menu-overlay");
let burgerIcon = document.querySelector("#burger-icon");
let xIcon = document.querySelector(".xicon-image");

function overlayOn() {
  menuOverlay.classList.remove("d-off");
}

function overlayOff() {
  menuOverlay.classList.add("d-off");
}

burgerIcon.addEventListener("click", overlayOn);
xIcon.addEventListener("click", overlayOff);