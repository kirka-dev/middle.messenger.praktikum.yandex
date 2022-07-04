import {Block} from "../../shared/services/Block";
import {Input} from "./components/input/input";
import {Button} from "../../shared/components/button/button";

import {userSettingsTmpl} from "./user-settings.tmpl";

export class UserSettings extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return this.compile(userSettingsTmpl, this.props);
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

const inputDisplayName = new Input({
    placeholder: 'Имя в чате',
    attributes: {
        id: 'display_name',
        name: 'display_name'
    }
});

const inputPhone = new Input({
    placeholder: 'Телефон',
    attributes: {
        id: 'phone',
        name: 'phone'
    }
});

const inputOldPassword = new Input({
    placeholder: 'Пароль',
    attributes: {
        type: 'password',
        id: 'oldPassword',
        name: 'oldPassword'
    }
});

const inputNewPassword = new Input({
    placeholder: 'Пароль (Еще раз)',
    attributes: {
        type: 'password',
        id: 'newPassword',
        name: 'newPassword'
    }
});

const buttonSubmit = new Button({
    text: 'Сохранить'
})

export const Components = {
    inputEmail,
    inputLogin,
    inputFirstName,
    inputSecondName,
    inputDisplayName,
    inputPhone,
    inputOldPassword,
    inputNewPassword,
    buttonSubmit,
}
