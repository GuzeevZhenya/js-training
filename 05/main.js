const user = {
    name: 'alex',
    age: 89
};
const div = document.createElement('div');
document.body.append(div);
const button = document.createElement('button');
document.body.append(button);
button.innerText = "Кнопка";
button.addEventListener('click', function () {
    div.innerText = `My name is  ${user.name} и мне ${user.age} лет`;
    if (user.age > 45) {
        const divAge = document.createElement('div');
        divAge.innerText = "Больше 45";
        document.body.append(divAge);
    }
});