const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const bodyEl = document.querySelector("body")

console.log(bodyEl);
// LI

// const item = function (callback) {
//   for (let i = 0; i < callback.length; i++) {
//     const element = callback[i];
//     const itemRef = document.createElement('li');
//     itemRef.classList.add('item')
//     itemRef.textContent = element
//     // console.log(element);
//     console.log(itemRef);
//     return itemRef
//   }
//   // return document.createElement(itemRef)
// }

// item(ingredients);
// document.createElement(item)
// console.log(item);


// Вставляем Li
const ulEl = document.querySelector('#ingredients');
// ulEl.appendChild(itemRef)

console.log(ulEl);

const itemRef = ingredients.forEach((ingredient) => {
  const itemAdd = document.createElement('li');
  itemAdd.classList.add('item');
  itemAdd.textContent = ingredient;

  ulEl.append(itemAdd)
});






