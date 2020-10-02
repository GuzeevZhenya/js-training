// const users = ['Alex', 'Viktor'];

// function User(name, age) {
//     this.age = age;
//     this.name = name;
// }

// const pavel = new User('pavel', 12);

// console.log(pavel.__proto__);

// const life = {
//     breeze: true,
// }

// const animal = {
//     eats: true
// };

// const rabbit = {
//     jump: true
// };
// const dog = {
//     barl: true,
//     __proto__: animal
// }

// rabbit.__proto__ = animal;
// animal.__proto__ = life;

// console.log(rabbit.__proto__ == dog.__proto__);

function Man() {
    this.intro = function() {
        alert(`i am ${this.name}`);
    }
}

User.prototype = new Man();

function User(name, age) {
    this.name = name;
    this.age = age;
}

const alex = new User('alex', 19);
alex.intro();
const mary = new User('reg', 12);
mary.intro();

Array.prototype = function()

const arr = [1, 2, 3];
const.blablabla();