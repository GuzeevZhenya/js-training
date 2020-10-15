// function calculate(number1){
//     return function(number2){
//         if(number2){
//             return calculate(number1 + number2);
//         }else{
//             return number1;
//         }
//     }
// }


// function multiply(value){
//     let calculated = value;
// if(value ===8){
//     console.log(value);
//     return null
// }else{
//     multiply(value **2);
// }
// }

const user = {
    name: 'Peter',
    showInfo: logName,
}

const car = {
    name: 'volvo',
    showInfo: logName,
}

function logName(){
    console.log(this.name);
}

// user.logName();
car.showInfo();

const jet = {
    name: 'boing',
};

const someFn = car.showInfo.bind(jet);
someFn();

