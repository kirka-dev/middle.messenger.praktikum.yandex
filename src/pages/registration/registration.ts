import {Block} from "../../shared/services/Block";
import {Input} from "../../shared/components/input/input";
import {Button} from "../../shared/components/button/button";

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
        name: 'email'
    }
});

const inputLogin = new Input({
    placeholder: 'Логин',
    attributes: {
        id: 'login',
        name: 'login'
    }
});

const inputFirstName = new Input({
    placeholder: 'Имя',
    attributes: {
        id: 'first_name',
        name: 'first_name'
    }
});

const inputSecondName = new Input({
    placeholder: 'Фамилия',
    attributes: {
        id: 'second_name',
        name: 'second_name'
    }
});

const inputPhone = new Input({
    placeholder: 'Телефон',
    attributes: {
        id: 'phone',
        name: 'phone'
    }
});

const inputPassword = new Input({
    placeholder: 'Пароль',
    attributes: {
        type: 'password',
        id: 'password',
        name: 'password'
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
    text: 'Вход'
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
