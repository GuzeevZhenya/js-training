// const geometricFigure = {
//     size: 25,

// }

// const rounded = {
//     rounded: true,
// }

// const angled = {
//     angled: true,
// }

// rounded.__proto__ = geometricFigure;
// angled.__proto__ = geometricFigure;

// const circle = {
//     radius: 20
// }

// const squeare = {
//     x: 40,
// }

// circle.__proto__ = rounded;
// squeare.__proto__ = angled;

// console.log(circle.size);
// console.log(squeare.angled);
// console.log(angled.size);
// console.log(rounded);
// console.log(geometricFigure);


function Animal() {
    console.log('animal');
}

function Dog(name) {
    this.name = name;
}


Dog.prototype = new Animal();


const bobik = new Dog("bobik");

console.log(bobik.Animal);