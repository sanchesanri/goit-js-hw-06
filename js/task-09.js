const widgetRef = document.querySelector('.widget');
const textSpanRef = document.querySelector('.color');


widgetRef.addEventListener('click', onButtonChangeColorClick)

function onButtonChangeColorClick (ev) {
  ev.preventDefault()

  if (ev.target.nodeName === 'BUTTON') {
    document.body.style.background = getRandomHexColor();textSpanRef.textContent = getRandomHexColor();
  }
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
