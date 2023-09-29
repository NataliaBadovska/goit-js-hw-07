const validationInput = document.querySelector('#validation-input');
// console.log(validationInput.dataset.length);

validationInput.addEventListener('blur',onInputBlur);

function onInputBlur(event) {
    
    if (event.currentTarget.value.length === parseInt(validationInput.dataset.length)) {
        event.currentTarget.classList.remove('invalid');
         event.currentTarget.classList.add('valid');
    } else {
         event.currentTarget.classList.add('invalid');
    }
}