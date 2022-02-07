/*
*Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
*/

const formRef = document.querySelector('.login-form');

// const firstInput = formRef.firstElementChild.firstElementChild;
// const secondInput = formRef.firstElementChild.nextElementSibling.firstElementChild;

// firstInput.addEventListener('input', inputLength);

// secondInput.addEventListener('input', inputLength)

// function inputLength (event) {
//     // console.log(event.currentTarget.value.length);
//     event.currentTarget.value.length
// };

formRef.addEventListener('submit', onFormSubmit);
// if(inputRef.value)

function onFormSubmit(event) {
    event.preventDefault();
    
    const eventForm = event.currentTarget.elements 
    // console.dir(eventForm);

    const email = eventForm.email.value;   
    const password = eventForm.password.value;
    const formData = {
        email,
        password,
    };

    if(email && password){
        console.log(formData);
    } else alert("please fill in all fields")
    
    formRef.reset();
}


// ------------------------------------
// const objForm = {};

// const formData = new FormData(event.currentTarget);
// console.dir(formData);
// formData.forEach((value, name) => {
//     console.log('Name: ', name, 'value: ', value);
// });

// console.log(objForm);
