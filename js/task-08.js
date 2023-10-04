const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onFormSubmit);

function onFormSubmit(ev) {
    ev.preventDefault();
    const evCTarget = ev.currentTarget.elements;

    
    const formData = {
        [evCTarget.email.name]: evCTarget.email.value,
        [evCTarget.password.name]: evCTarget.password.value,
    }

    if (!evCTarget.email.value || !evCTarget.password.value) {
        formRef.reset();
        alert('You should fill in the fields!!');
        return
    }

    console.log(formData);

    formRef.reset();
}

