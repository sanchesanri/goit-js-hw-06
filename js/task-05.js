const inputEl = document.querySelector('#name-input');
const txtSpanEl = document.querySelector('#name-output');

// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

inputEl.addEventListener('input', (event) => {
    event.currentTarget.value === ''
        ? (txtSpanEl.textContent = 'Anonymous')
        : (txtSpanEl.textContent = event.currentTarget.value)
        console.log(event.currentTarget.value);
});


// const inputClick = inputEl.addEventListener('input', ()=>{
//     return event.currentTarget.value === '' ? txtSpanEl.textContent = "Anonymous" : txtSpanEl.textContent = event.currentTarget.value
// });

// const inputClick = inputEl.addEventListener('input', textValue);

// function textValue(event) {
// 1-first method
//     return event.currentTarget.value === '' ? txtSpanEl.textContent = "Anonymous" : txtSpanEl.textContent = event.currentTarget.value
// 2-second method
// if(event.currentTarget.value === ''){
//     return txtSpanEl.textContent = "Anonymous"
// }return txtSpanEl.textContent = event.currentTarget.value

// }
