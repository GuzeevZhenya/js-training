// const login = document.querySelector('#login');
// const password = document.querySelector('#password');
// const div = document.querySelector('#word');

// input.addEventListener('input', (event) => {
//     div.innerText = event.target.value;
// });


// input.addEventListener('change', (event) => {
//     div.innerText = event.target.value;
// });

// const user = {
//     login: "me666",
//     password: '666me666'
// }

// //Валидация login
// login.addEventListener('input', (event) => {
//     const isValid = event.target.value === user.login;
//     if (!isValid) {
//         event.target.classList.add('invalid');
//     } else {
//         event.target.classList.remove('invalid');
//     }
// })

// //Валидация пароля
// password.addEventListener('input', (event) => {
//     const isValid = event.target.value === user.password;
//     if (!isValid) {
//         event.target.classList.add('invalid');
//     } else {
//         event.target.classList.remove('invalid');
//     }
// })

// const loginValue = login.value;
// const passwordValue = password.value;
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const btn = document.querySelector('button');
const form = document.querySelector('form');
const div = document.querySelector('.div');


const user = {
    email: '1',
    password: '12',
    name: 'Lil'
};

login.addEventListener('input', (event) => {
    if (document.body.contains(div)) {
        div.remove();
    }
    empty(event);


})

password.addEventListener('input', (event) => {
    empty(event);
    if (document.body.contains(div)) {
        div.remove();
    }
})

//Проверка чтобы 2 поля были заполнены

function setDisabledStatus() {
    if (login.value === "" || password.value === "") {
        btn.disabled = true;
    } else {
        btn.disabled = false;
    }
}

function empty(event) {
    const isValid = event.target.value;
    if (isValid === "") {
        btn.disabled = true;
        event.target.classList.add('invalid');
    } else {
        btn.disabled = false;
        event.target.classList.remove('invalid');
    }
    setDisabledStatus();
}

btn.addEventListener('click', (event) => {
    event.preventDefault();
    if (login.value == user.email && password.value == user.password) {
        let div = document.createElement('div');
        document.body.appendChild(div);
        div.innerText = `Привет ${user.name}`;
        form.remove();
    } else {
        let div = document.createElement('div');
        div.classList.add('div');
        document.body.appendChild(div);
        div.innerText = 'error';
        password.value = "";
        login.value = "";
        btn.disabled = true;
    }
})




// form.addEventListener('input', (event) => {
//     event.preventDefault();
//     const isValid = event.target.value;
//     if (isValid === "") {
//         event.target.classList.add('invalid');
//     } else {
//         event.target.classList.remove('invalid');
//     }
// })


// function isValid() {
//     if (!loginValue || !passwordValue) {
//         btn.setAttribute = 'enabled';
//     }
// }

// form.addEventListener('change', (event) => {
//     const isValidLogin = event.target.value === user.email;
//     const isValidPassword = event.target.value === user.password;
//     if (isValidLogin && isValidPassword) {
//         console.log(isValidLogin);
//         div.innerText = 'Добро пожаловать';
//     }
//     //else {
//     //     alert('error');
//     // }
// })