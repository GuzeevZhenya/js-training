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

// function Man() {
//     this.intro = function() {
//         alert(`i am ${this.name}`);
//     }
// }

// User.prototype = new Man();

// function User(name, age) {
//     this.name = name;
//     this.age = age;
// }

// const alex = new User('alex', 19);
// alex.intro();
// const mary = new User('reg', 12);
// mary.intro();

// Array.prototype.blablabla = function() {
//     alert("bla-bla-bla");
// }

// const arr = [1, 2, 3];
// arr.blablabla();


// function Life(minDuration) {
//     this.minDuration = minDuration;
//     this.breeze = function() {
//         alert(`I am Breezing! ${this.name}`);
//     }
// }


// function Man(name, minDuration) {
//     this.__proto__ = new Life(minDuration);
//     this.name = name;
//     this.intro = function() {
//         alert(`i am ${this.name}`);
//     }
// }

// // Man.prototype = new Life(18);
// const man = new Man('alex', 18);
// const man2 = new Man('Bob', 21);


//Как создать объект, без поля прото и прототипа

// const obj = Object.create(null);
// console.log(obj);


//Классы

// function Person(name) {
//     this.name = name;
//     this.run = function() {
//         console.log(`run ${this.name},run`);
//     }
// }




class Man {
    constructor(duration) {
        this.duration = duration;
    }
    sayHello() {
        console.log(`hi! my duration is ${this.duraton}`);
    }
}

class Person extends Man {
    constructor(name, someNumber) {
        super(someNumber);
        this.name = name;
    }
    run() {
        console.log(`run ${this.name},run`);
    }

}


const forest = new Person('forest', 25);
forest.run();




//DZ
function Modal() {
    this.show = function () {
        console.log(`show ${this.name}`);
    };
    this.hide = function () {
        console.log(`hide,${this.name}`);
    };
}

function Warning(name, message) {
    // this.__proto__ = new Modal();
    this.name = name;
    this.message = message;
}

function Success(name, message) {
    // this.__proto__ = new Modal(); //если есть аргументы
    this.name = name;
    this.message = message;
}

Success.prototype = new Modal();
Warning.prototype = new Modal();


const warning = new Warning('404', 'erro');
console.log(warning);


const success = new Success('405', 'wef');
console.log(success);

//3
// const obj = {
//     bingoBall: 2,
//     __proto__: function() {

//     }
// }

// const obj2 = {
//     bingeBall: 2
// }

// function Bingo() {

// }

Object.prototype.bingo = function () {
    for (const key in this) {
        if (typeof this[key] !== 'function' && key.startsWith('bingo')) {
            console.log('bingo');
            return;
        }
    }
}

class Anouncer {
    constructor() {}
    present() {
        console.log(`hello`);
    }
}

class Figure extends Anouncer {
    constructor(size) {
        super();
        this.size = size;
    }
}

class Circle extends Figure {
    constructor(size, type) {
        super(size);
        this.type = type;
    }
    getArea() {
        return this.size ** 2 * Math.PI;
    }
}

class Square extends Figure {
    constructor(size, type) {
        super(size);
        this.type = type;
    }
    getArea() {
        return this.size ** 2;
    }
}