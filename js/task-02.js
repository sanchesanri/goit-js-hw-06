const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');
const createLi = document.createElement('li');

const createFullElementLi = arr => 
arr.map(el=>{
    const createLi = document.createElement('li');
    createLi.textContent = el;
    createLi.classList.add('item');
    return createLi
  })

function addElementsLi (arr, callback) {
  const arrLi = callback(arr)
  ulRef.prepend(...arrLi)
}

addElementsLi(ingredients, createFullElementLi)