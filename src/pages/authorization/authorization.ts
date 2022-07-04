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
    attributes: {
        id: 'login',
        name: 'login',
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

const buttonSubmit = new Button({
    text: 'Вход',
    events: {
        click: (e) => {
            const data = new FormData(document.querySelector('form'));
            const result = {};

            for (const [key, value] of data) {
                result[key] = value;
            }

            console.log(result);
            // e.preventDefault();
        }
    }
})

export const Components = {
    inputLogin,
    inputPassword,
    buttonSubmit
}
