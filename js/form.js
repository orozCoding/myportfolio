const formName = document.getElementById('form-name');
const email = document.getElementById('form-email');
const msg = document.getElementById('form-msg');
const errorMsg = document.getElementsByClassName('form-error');
const form = document.getElementById('form');

form.addEventListener('submit', (event) => {
  if (email.value !== email.value.toLowerCase()) {
    event.preventDefault();
    errorMsg[1].innerHTML = 'Please use lower case.';
    email.style.border = 'solid 5px red';
  } else {
    errorMsg[1].innerHTML = '';
    email.style.border = null;
    form.submit();
    formName.value = '';
    email.value = '';
    msg.value = '';
  }
});