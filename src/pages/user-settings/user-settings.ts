import {Block} from "../../shared/services/Block";
import {Input} from "./components/input/input";
import {Button} from "../../shared/components/button/button";
import {inputValidate} from "../../shared/utils/validate";
import {submitForm} from "../../shared/utils/submitForm";

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
        required: true,
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

const inputDisplayName = new Input({
    placeholder: 'Имя в чате',
    attributes: {
        id: 'display_name',
        name: 'display_name'
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

const inputOldPassword = new Input({
    placeholder: 'Пароль',
    attributes: {
        type: 'password',
        id: 'oldPassword',
        name: 'oldPassword'
    },
    childEvents: {
        input: {
            blur: (e) => inputValidate(e.target),
        },
    }
});

const inputNewPassword = new Input({
    placeholder: 'Пароль (Еще раз)',
    attributes: {
        type: 'password',
        id: 'newPassword',
        name: 'newPassword',
        'data-pattern': 'password'
    },
    childEvents: {
        input: {
            blur: (e) => inputValidate(e.target),
        },
    }
});

const buttonSubmit = new Button({
    text: 'Сохранить',
    events: {
        click: (e) => submitForm(e, 'form')
    }
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
