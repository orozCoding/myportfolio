let menuOverlay = document.querySelector('#menu-overlay');
let burgerIcon = document.querySelector('#burger-icon');
let xIcon = document.querySelector('.xicon-image');
let menuButtons = document.querySelectorAll('#menu-overlay a');

function overlayOn() {
  menuOverlay.classList.remove('d-off');
  document.body.classList.add('no-scroll');
}

function overlayOff() {
  menuOverlay.classList.add('d-off');
  document.body.classList.remove('no-scroll');
}

for (let i = 0; i < menuButtons.length; i++) {
  menuButtons[i].addEventListener('click', overlayOff);
}

burgerIcon.addEventListener('click', overlayOn);
xIcon.addEventListener('click', overlayOff);