const form = document.querySelector('#registerForm');
const btn = document.querySelector('#btn');
const INVALID_CLASS = "invalid";

//Проверяет на пустоту в объекте 
function checkEmptyField() {
    this.valid = this.value !== "";
}

//Поля для записи из формы
const formHelper = {
    name: {
        value: '',
        valid: false,
        checkValidation: checkEmptyField,
    },
    email: {
        value: '',
        valid: false,
        checkValidation() {
            this.valid = this.value !== "";
        },
    },
    password: {
        value: '',
        valid: false,
        checkValidation: checkEmptyField,
    },
    repeatPassword: {
        value: '',
        valid: false,
        checkValidation() {
            this.valid = this.value !== "";
        },
    },
    //Проходим по всему объекту(всем ключам) и если ключ не функция
    // и значение valid === false то вернет false, если нет,  то вернет true;
    checkFormValidation() {
        for (const key in this) {
            if (typeof this[key] !== 'function' && this[key].valid === false) {
                return false;
            }
        }
        return true;
    }
};

//принимает DOM ноту и статус валидации
function handleClassAdding(domNode, isValid) {
    if (isValid) {
        domNode.classList.remove(INVALID_CLASS);
    } else {
        domNode.classList.add(INVALID_CLASS);
    }
}

form.addEventListener('input', (event) => {
    //Получаем значение Input
    const value = event.target.value;
    //Получаем имя input
    const name = event.target.name;
    console.log(event.target);

    // по ключу name заносим в Объект значение
    formHelper[name].value = value;
    formHelper[name].checkValidation();
    //вызываем метод и завернем в btn.disabled результат
    btn.disabled = !formHelper.checkFormValidation();
    handleClassAdding(name);
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
})