import {Block} from "../../shared/services/Block";
import {Input} from "../../shared/components/input/input";
import {Button} from "../../shared/components/button/button";
import {inputValidate} from "../../shared/utils/validate";
import {submitForm} from "../../shared/utils/submitForm";

import {registrationTmpl} from "./registration.tmpl";


export class Registration extends Block {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return this.compile(registrationTmpl, this.props);
    }
}

const inputEmail = new Input({
    placeholder: 'Почта',
    attributes: {
        id: 'email',
        name: 'email',
        'data-pattern': 'email',
    },
    childEvents: {
        input: {
            blur: (e) => inputValidate(e.target),
        },
    }
});

const inputLogin = new Input({
    placeholder: 'Логин',
    attributes: {
        id: 'login',
        name: 'login',
        'data-pattern': 'login',
    },
    childEvents: {
        input: {
            blur: (e) => inputValidate(e.target),
        },
    }
});

const inputFirstName = new Input({
    placeholder: 'Имя',
    attributes: {
        id: 'first_name',
        name: 'first_name',
        'data-pattern': 'name',
    },
    childEvents: {
        input: {
            blur: (e) => inputValidate(e.target),
        },
    }
});

const inputSecondName = new Input({
    placeholder: 'Фамилия',
    attributes: {
        id: 'second_name',
        name: 'second_name',
        'data-pattern': 'name',
    },
    childEvents: {
        input: {
            blur: (e) => inputValidate(e.target),
        },
    }
});

const inputPhone = new Input({
    placeholder: 'Телефон',
    attributes: {
        id: 'phone',
        name: 'phone',
        'data-pattern': 'phone',
    },
    childEvents: {
        input: {
            blur: (e) => inputValidate(e.target),
        },
    }
});

const inputPassword = new Input({
    placeholder: 'Пароль',
    attributes: {
        type: 'password',
        id: 'password',
        name: 'password',
        'data-pattern': 'password'
    },
    childEvents: {
        input: {
            blur: (e) => inputValidate(e.target),
        },
    }
});

const inputPasswordRepeat = new Input({
    placeholder: 'Пароль (Еще раз)',
    attributes: {
        type: 'password',
        id: 'passwordRepeat'
    }
});

const buttonSubmit = new Button({
    text: 'Вход',
    events: {
        click: (e) => submitForm(e, 'form')
    }
})

export const Components = {
    inputEmail,
    inputLogin,
    inputFirstName,
    inputSecondName,
    inputPhone,
    inputPassword,
    inputPasswordRepeat,
    buttonSubmit
}
