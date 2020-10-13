const fruits = ['apple', 'banana', 'cherry', 'strawberry', 'pear'];

const [firstFruit, secondFruit] = fruits;
const [first, ...rest];

const car = {
    engine: 10
}
const {
    engine
} = car;

const details = {
    koleso: 4
}

const mergedOb = {
    ...car,
    ...details
};
const mergedArr = [...fruits, ...rest];