const inputRef = document.querySelector('#validation-input');
const inputDataAttribute = inputRef.getAttribute('data-length');
// console.log(inputDataAttribute);

const addListenerInput = inputRef.addEventListener('blur', event => {
    // console.log(event.currentTarget.value.length);
    if (event.currentTarget.value.length === Number(inputDataAttribute)) {
        inputRef.classList.add('valid');
        inputRef.classList.remove('invalid');
    } else {
        inputRef.classList.add('invalid');
        inputRef.classList.remove('valid');
    }
});


// inputRef.addEventListener('blur', onInputLength);
// function onInputLength(event) {
//     if (event.currentTarget.value.length !== Number(inputRef.dataset.length)) {
//         inputRef.classList.add('invalid');
//         inputRef.classList.remove('valid');
//         console.log("a");
//     } else {
//         inputRef.classList.add('valid');
//         inputRef.classList.remove('invalid');
//         console.log("b");
//     }
// }
// console.log(inputRef);
