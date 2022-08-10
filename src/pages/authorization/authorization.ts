import {Block} from "../../shared/services/Block";
import {Input} from "../../shared/components/input/input";
import {Button} from "../../shared/components/button/button";
import {inputValidate} from "../../shared/utils/validate";
import {submitForm} from "../../shared/utils/submitForm";

import {authorizationTmpl} from "./authorization.tmpl";

export class Authorization extends Block {
    constructor(props: any) {
        super(props);
    }

    public render() {
        return this.compile(authorizationTmpl, this.props);
    }
}
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

const inputPassword = new Input({
    placeholder: 'Пароль',
    attributes: {
        type: 'password',
        id: 'password',
        name: 'password',
        'data-pattern': 'password',
    },
    childEvents: {
        input: {
            blur: (e) => inputValidate(e.target),
        },
    }
});

const buttonSubmit = new Button({
    text: 'Вход',
    events: {
        click: (e) => submitForm(e, 'form')
    }
})

export const Components = {
    inputLogin,
    inputPassword,
    buttonSubmit
}
