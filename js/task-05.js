const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');

const inputValue = inputRef.addEventListener('input', onCurrentTargetInput)

function onCurrentTargetInput (ev) {
    const inputValue = ev.currentTarget.value
    return inputValue ? spanRef.textContent = inputValue : spanRef.textContent = 'Anonymous';

      // if(!(inputValue)){
    //     return spanRef.textContent = 'Anonymous'
    // }
    // spanRef.textContent = inputValue
}