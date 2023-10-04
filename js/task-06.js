const inputRef = document.querySelector('#validation-input');
const inputDataValue = inputRef.dataset.length;
// console.log(inputDataValue);

inputRef.addEventListener('blur', onCurrentValueBlur);

function onCurrentValueBlur (ev) {
    const currentValue = ev.currentTarget.value
    if(currentValue.length === Number(inputDataValue)){
            inputRef.classList.remove("invalid")
            inputRef.classList.add("valid")
    }else{
        inputRef.classList.add("invalid")
        inputRef.classList.remove("valid")
    }
}
