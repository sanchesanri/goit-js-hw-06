const inputRef = document.querySelector('input');
const btnCreateRef = document.querySelector('button[data-create]');
const btnDestroyRef = document.querySelector('button[data-destroy]');
const boxMarkup = document.querySelector('#boxes');

btnCreateRef.addEventListener('click', createMarkup);
btnDestroyRef.addEventListener('click', removeMarkup);

function createMarkup(ev) {
    boxMarkup.innerHTML = '';
    createAnotherBoxes(inputRef.value);

    //   createBoxes(inputRef.value)
}

function createAnotherBoxes(amount) {
    const quantityBoxes = Number(amount);

    const arr = new Array(quantityBoxes);

    const fillNewArr = arr
        .fill()
        .map(
            (item,index) =>
                (item = `<div class="coloredSquare" style="width: ${30 + index * 10}px; height: ${30 + index * 10}px; background: ${getRandomHexColor()}"></div>`),
        )
        .join('');

    boxMarkup.insertAdjacentHTML('beforeend',fillNewArr)
}

// function createBoxes(amount) {
//     const number = Number(amount);
//     const makeMarkup = [];
//     let numberForTag = 20;

//     for (let i = 0; i < number; i += 1) {
//         numberForTag += 10;
//         const createDiv = document.createElement('div');
//         createDiv.classList.add('coloredSquare');
//         createDiv.style.width += numberForTag + 'px';
//         createDiv.style.height += numberForTag + 'px';
//         createDiv.style.background = getRandomHexColor();
//         makeMarkup.push(createDiv);
//     }
//     console.log(makeMarkup);

//     return boxMarkup.append(...makeMarkup);
// }

function removeMarkup() {
    boxMarkup.innerHTML = '';
    inputRef.value = '';
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

