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