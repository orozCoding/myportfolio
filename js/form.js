const email = document.getElementById('form-email');
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
  }
});

let formStorage = {
  formName: '',
  formEmail: '',
  formMsg: ''
}

getLocalStorage();

localStorage.setItem('formInfo', JSON.stringify( formStorage ));

nameInput.addEventListener('change', (event) => {
  formStorage.formName = nameInput.value;
  localStorage.setItem('formInfo', JSON.stringify( formStorage ));
})

emailInput.addEventListener('change', (event) => {
  formStorage.formEmail = emailInput.value;
  localStorage.setItem('formInfo', JSON.stringify( formStorage ));
})

msgInput.addEventListener('change', (event) => {
  formStorage.formMsg = msgInput.value;
  localStorage.setItem('formInfo', JSON.stringify( formStorage ));
})

function getLocalStorage () {

  if (localStorage.getItem('formInfo')) {
    formStorage = JSON.parse(localStorage.getItem('formInfo'));
    nameInput.value = formStorage.formName;
    emailInput.value = formStorage.formEmail;
    msgInput.value = formStorage.formMsg;
  }

}
