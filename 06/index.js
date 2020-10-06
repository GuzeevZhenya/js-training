const form = document.querySelector('.registerForm');
const btn = document.querySelector('.btn');

const formHelper = {
    name: {
        value: "",
        valid: false,
        checkValidation() {
            this.valid = this.value !== "";
        }
    },
    email: {
        value: "",
        valid: false,
        checkValidation() {
            this.valid = this.value !== "";
        }
    },
    password: {
        value: "",
        valid: false,
        checkValidation: checkField,
    },
    repeatPassword: {
        value: "",
        valid: false,
        checkValidation() {
            this.valid = this.value !== "";
        },
    },
    checkFormValidation() {
        for (const key in this) {
            if (typeof this[key] !== 'function' && this[key].valid === false) {
                return false;
            } else {
                return true;
            }
        }
    }

}

form.addEventListener('input', (event) => {
    const value = event.target.value;
    const name = event.target.name;

    formHelper[name].value = value;
    formHelper[name].checkValidation();
    btn.disabled = !formHelper.checkValidation();

    handleClassAdding(event.target);
})

function handleClassAdding(domNode, isValid) {
    if (isValid) {
        domNode.classList.remove(INVALID_CLASS);
    } else {
        domNode.classList.add(INVALID_CLASS);
    }
}


form.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(formHelper);
})