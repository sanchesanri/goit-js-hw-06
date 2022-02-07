const images = [
    {
        url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'White and Black Long Fur Cat',
    },
    {
        url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
        url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
        alt: 'Group of Horses Running',
    },
];

const listRef = document.querySelector('.gallery');

// console.log(images);

// const arrayImages = images.forEach(images => {
//     const { url, alt } = images;

//     return listRef.insertAdjacentHTML(
//         "beforeend",
//         // "afterbegin",
//         `<li class="item">
//         <img class="item__img" url='${url}' alt='${alt}'></img>
//         </li>`,
//     );
// });

const arrayImages = images.map(({ url, alt }) =>
    listRef.insertAdjacentHTML(
        'beforeend',
        `<li class="item">
        <img  class="item__img" src="${url}" alt="${alt}"></img>
        </li>`,
    ),
);

console.log(listRef);
