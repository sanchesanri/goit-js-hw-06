const ulCategoriesRef = document.querySelector('#categories');

function logCategoriesQuantity (quantityCategories) {
   console.log('Number of categories: ',quantityCategories.length);
};
const totalCategories = ulCategoriesRef.children


function logTagH2Li ([...arr]) {
    arr.forEach(el => {
    console.log('Category: ',el.firstElementChild.textContent);
    console.log("Elements: ",el.lastElementChild.children.length);
    });
};


logCategoriesQuantity(totalCategories)
logTagH2Li(totalCategories);






