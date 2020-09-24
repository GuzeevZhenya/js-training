let users = {
    name: 'Ivan',
    age: 35,
    sayHello: function () {
        //   alert(`my name is ${this.name}, age :${this.age}`);
    }
}
console.log(users.sayHello());



//1

let car = {
    name: 'Mazda',
    age: 2,
    color: 'yellow',
}

for (let key in car) {
    console.log(key, car[key]);
}


//2 

let user = {
    name: 'Artem',
    email: 'email@.ru',
    phone: '+3754523435',
    id: "123.123.1213.1",
}

let newUser = {}
newUser = Object.assign(user);

console.log(user);
console.log(newUser);

//3
const Pi = 3.14;
let circle = {
    radius: 14,
    color: 'red',
    calculateCircumference: function () {
        return 2 * Pi * this.radius;
    }
}

console.log(circle.calculateCircumference());

//4
let message = {
    getMessage: function (string) {
        this.text = string;
    },
    showMessage: function () {
        return this.text;
    }
}

message.getMessage('ergerg');
console.log(message.showMessage());


//5 

let rectangle = {
    getInfo(width, height) {
        this.width = width;
        this.height = height;
    },
    getArea: function () {

        return this.height * this.width;
    }
}

rectangle.getInfo(12, 12);
console.log(rectangle.getArea());


//6 

function isEmpty(obj) {
    for (let key in obj) {
        return false;
    }
    return true;
}

7

let selfGeneratedUser = {
    getInfo: function () {
        name = prompt('Ваше имя');
        phone = prompt('Ваш номер телефона');
        email = prompt('Ваш email');
        this.name = name;
        this.phone = phone;
        this.email = email;
    },
    introduce: function () {
        for (let key in this) {
            if (typeof this[key] !== 'function') {
                alert(this[key]);
            }
        }
    }
}

selfGeneratedUser.getInfo();
selfGeneratedUser.introduce();


function Dog(name, age, breed) {
    this.name = name;
    this.age = age;
    this.breed = breed;
    this.skills = [];
    this.intro = function () {
            return `Woof! I am ${this.name}, and I am ${this.age}. I am ${this.breed}.`
        },
        this.bark = function () {
            let result = "";
            for (let i = 0; i < this.age; i++) {
                result += "woof!";
            }
            console.log(result);
        },
        this.comeHere = function (word) {
            if (word === this.name) {
                return 'arf-arf';
            }
        },
        this.teach = function (skills) {
            this.skills.push(skills);
        }
    if (this.skills.length >= 4) {
        this.bark = function () {
            console.log('im better');
        }
    }
}

const ratveller = new Dog('ratveller', 12, 'rgfer');
console.log(ratveller.bark());
console.log(ratveller.comeHere('ratvelfer'));
console.log(ratveller.teach('ergerg'));
console.log(ratveller.teach('ergerg'));
console.log(ratveller.skills);


const str = 45;

function ing(string) {
    string += 'alex';
}


let newIng = ing(str);
console.log(newIng, str, string, ing());