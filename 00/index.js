const name = 'Andrei';
const surname = 'Filatov';
const age = 32;

alert(`Hello, world! Встречай, JS! Я ${name } ${surname}, и мне ${age}. Рад встрече!`);

const user = {
    name: 'Vlad',
    growth: 176,
    age: 25,
    isSmoked: false,
}


user.friendList = ['Vasia', 'Anton', 'Oleg'];

console.log(user.growth);
user.canSingSongs = false;
delete user.friendList;
// console.log(user);
for (key in user) {
    console.log(key + ":" + user[key]);
}


function quadraticEquation(a, b, c) {
    let Dis, x1, x2;
    Dis = b ** 2 - 4 * a * c;
    if (Dis > 0) {
        x1 = (-b + Math.sqrt(Dis)) / (2 * a);
        x2 = (-b - Math.sqrt(Dis)) / (2 * a);

    } else if (Dis == 0) {
        x1 = (-b) / (2 * a);

    } else if (Dis < 0) {
        console.log('Дискриминант меньше 0');
    }
    let arr = [];
    arr.push(x1, x2);
    console.log(arr);
}

quadraticEquation(2, 3, 4);