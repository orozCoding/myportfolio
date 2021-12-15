const name = document.getElementById('form-name');
const email = document.getElementById('form-email');
const msg = document.getElementById('form-msg');
const errorMsg = document.getElementsByClassName('form-error');
const form = document.getElementById('form');

const hasCaps = 


form.addEventListener('submit', (event) => {

  if (email.value != email.value.toLowerCase()) {
    event.preventDefault();
    errorMsg[1].innerHTML = 'nop';
  } else {
    errorMsg[1].innerHTML = '';
  }
  
} );