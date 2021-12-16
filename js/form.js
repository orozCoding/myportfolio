const nameInput = document.getElementById('form-name');
const emailInput = document.getElementById('form-email');
const msgInput = document.getElementById('form-msg');
const errorMsg = document.getElementsByClassName('form-error');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  if (emailInput.value !== emailInput.value.toLowerCase()) {
    event.preventDefault();
    errorMsg[1].innerHTML = 'Please use lower case.';
    emailInput.style.border = 'solid 5px red';
  } else {
    errorMsg[1].innerHTML = '';
    emailInput.style.border = null;
  }
});
