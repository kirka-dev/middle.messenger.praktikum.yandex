import {Block} from "../../shared/services/Block";
import {Input} from "../../shared/components/input/input";
import {Button} from "../../shared/components/button/button";
import {submitForm} from "../../shared/utils/submitForm";

import {authorizationTmpl} from "./authorization.tmpl";
import {inputValidate} from "../../shared/utils/validate";
import {PATTERNS} from "../../shared/consts/patterns";

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
    }
});

const inputPassword = new Input({
    placeholder: 'Пароль',
    attributes: {
        type: 'password',
        id: 'password',
        name: 'password',
        'data-pattern': 'password',
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
