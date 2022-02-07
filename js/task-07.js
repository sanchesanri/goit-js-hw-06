/*
*Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инл-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

<input id="font-size-control" type="range" min="16" max="96" />
<br />
<span id="text">Abracadabra!</span>
*/

const inputRef = document.querySelector('input');
const textRef = document.querySelector('#text');

inputRef.addEventListener('change', function (event) {
    textRef.style.fontSize = event.currentTarget.value + 'px'
    // console.log(event.currentTarget.value + 'px');
    // console.log(inputRef.value);
})

// textRef.style.fontSize = '10' + px;

