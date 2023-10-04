const inputRef  = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');
const numberSizeRef = document.querySelector('.span-min-max')

inputRef.addEventListener('input', onInputChange);

function onInputChange(ev) {
    const inputValue = inputRef.value;

    numberSizeRef.textContent = `${Number(inputValue)} px`
    textRef.style.fontSize = `${inputValue}px`
}
