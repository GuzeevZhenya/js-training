const users = [{
        name: "Alex",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$54",
        isActive: false,
        gender: "female",
    },
    {
        name: "Vlad",
        company: "Yandex",
        email: "vlad @gmail.com",
        phone: "+375293429232",
        balance: "$64",
        isActive: false,
        gender: "female",
    }, {
        name: "Igor",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+37529223492",
        balance: "$57",
        isActive: false,
        gender: "female",
    }, {
        name: "Stas",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$79",
        isActive: false,
        gender: "male",
    }, {
        name: "Sergei",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$43",
        isActive: false,
        gender: "male",
    }, {
        name: "Viktor",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$54",
        isActive: false,
        gender: "male",
    }, {
        name: "Zhenya",
        company: "Google",
        email: "alex @gmail.com",
        phone: "+375292929292",
        balance: "$58",
        isActive: false,
        gender: "female",
    },
]

// function InfoTable(users) {
//     let table = document.createElement('table');
//     document.body.append(table);

//     table.classList.add('table_blur');
//     //Заголовки таблиц
//     let rowHeader = table.insertRow();
//     for (let prop in users[0]) {
//         let cell = rowHeader.insertCell();
//         cell.innerText = prop;
//         cell.classList.add('box');
//     }


//     //Инфо по таблице
//     for (let i = 0; i < users.length; i++) {
//         let row = table.insertRow();
//         for (let prop in users[i]) {
//             let cell = row.insertCell();
//             cell.classList.add('box');
//             cell.innerText = users[i][prop];
//         }


//         let btnDelete = document.createElement('button');
//         document.body.append(btnDelete);
//         btnDelete.innerHTML = 'Удалить';

//         btnDelete.addEventListener('click', (event) => {
//             event.preventDefault();
//             users.splice(i, 1);
//             console.log(users);
//             row.remove();
//             btnDelete.remove();
//         });
//     }
// }

// InfoTable(users);

// users.forEach(function(item, index) {

//     let info = document.createElement('div');
//     document.body.appendChild(info);

//     info.classList.add('box');

//     info.innerHTML = `${item.name},  ${item.company},  ${item.email}, ${item.phone}, ${item.balance}, ${item.isActive}, ${item.gender}`;
//     // document.querySelector('body').appendChild(` < p > $ { info } < \p > `);
// })

const {
    name,
    company,
    email,
    phone,
    balance,
    isActive,
    gender
} = users;
users.forEach((item) => {

    let info = document.createElement('div');
    document.body.appendChild(info);
    info.classList.add('box');
    info.innerHTML = `${item.name},  ${item.company},  ${item.email}, ${item.phone}, ${item.balance}, ${item.isActive}, ${item.gender}`;


    let btnDelete = document.createElement('button');
    document.body.append(btnDelete);
    btnDelete.innerHTML = 'Удалить';
    btnDelete.addEventListener('click', (event) => {
        event.preventDefault();
        users.splice(item, 1);
        info.remove();
        btnDelete.remove();
        // item.remove();
        // btnDelete.remove();
        console.log(users);
    });
});

const allWomen = (users) => users.filter((item) => item.gender === 'female');
console.log(allWomen(users));

const bigestBalance = (users) => users
        .sort((a, b) => a.balance - b.balance);
console.log(bigestBalance(users)[users.length-1]);


