const doc = document.body;
// console.log(doc);
// const ulRef = document.querySelector('#categories');
// console.log(ulRef);

const quantityCategoryEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${quantityCategoryEl.length}`);
// console.log(quantityCategoryEl)

const elCategories = quantityCategoryEl.forEach(function (category) {

    console.log(`Category: `, category.firstElementChild.textContent);      
    // const elLastCategory = category.lastElementChildChild
    // console.log(elLastCategory)
    console.log(`Elements: `, category.lastElementChild.children.length);
})
