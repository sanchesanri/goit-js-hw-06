
const ref ={
    decrement: document.querySelector('button[data-action="decrement"]'),
    increment: document.querySelector('button[data-action="increment"]'),
    span: document.querySelector('#value'),
};

let counterValue = 0;

ref.decrement.addEventListener('click',(e)=>{
    counterValue -= 1;
    ref.span.textContent = counterValue;
})

ref.increment.addEventListener('click',(e)=>{
    counterValue += 1;
    ref.span.textContent = counterValue;
})
