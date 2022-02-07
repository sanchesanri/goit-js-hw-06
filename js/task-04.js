// let counterValue = 0;

// const incrementClick = ()=>{
//     counterValue += 1;
//     // console.log(counterValue);
//     value.textContent = counterValue
// };
// const decrementClick = ()=>{
//     counterValue -= 1;
//     // console.log(counterValue);
//     value.textContent = counterValue
// };

// const decrementBtn = document.querySelector('button[data-action="decrement"]');
// const incrementBtn = document.querySelector('button[data-action="increment"]');
// const value = document.querySelector('#value');

// // const counterClick = event =>{
//     //     console.log(event);
// // };

// decrementBtn.addEventListener('click', decrementClick);
// incrementBtn.addEventListener('click', incrementClick);
// console.log(value.textContent);

let counterValue = 0;
const incrementClick = function () {
    counterValue += 1;
    return (value.textContent = counterValue);
};

const decrementClick = function () {
    counterValue -= 1;
    return (value.textContent = counterValue);
};

const incrementBtn = document.querySelector('button[data-action="increment"]');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const value = document.querySelector('#value');

incrementBtn.addEventListener('click', incrementClick);
decrementBtn.addEventListener('click', decrementClick);







