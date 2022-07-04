import {Block} from "../../shared/services/Block";
import {Input} from "../../shared/components/input/input";
import {Button} from "../../shared/components/button/button";

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
});

const inputPassword = new Input({
    placeholder: 'Пароль',
    attributes: {
        type: 'password'
    }
});

const buttonSubmit = new Button({
    text: 'Вход'
})

export const Components = {
    inputLogin,
    inputPassword,
    buttonSubmit
}
