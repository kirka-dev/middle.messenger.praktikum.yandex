import Component from "../../services/Component";
import getFormData from "../../utils/getFormData";
import {signupTemplate} from "./signup.template";
import {InputComponent} from "../../components/common/input";
import {ButtonComponent} from "../../components/common/button";
import {RouteButtonComponent} from "../../components/common/route-button";
import {router} from "../../index";
import SignupApi from "./signup.api";

export class SignupPage extends Component {
    constructor(props?) {
        super("div", props);
    }

    initChildren() {
        this.children.routeButton = new RouteButtonComponent({
            text: 'Войти',
            events: {
                click: () => router.go('/')
            }
        });

        this.children.email = new InputComponent({
            placeholder: 'E-Mail',
            name: 'email'
        });

        this.children.login = new InputComponent({
            placeholder: 'Логин',
            name: 'login'
        });

        this.children.firstName = new InputComponent({
            placeholder: 'Имя',
            name: 'first_name'
        });

        this.children.secondName = new InputComponent({
            placeholder: 'Фамилия',
            name: 'second_name'
        });

        this.children.phone = new InputComponent({
            placeholder: 'Телефон',
            name: 'phone'
        });

        this.children.password = new InputComponent({
            placeholder: 'Пароль',
            name: 'password'
        });

        this.children.passwordRepeat = new InputComponent({
            placeholder: 'Повтори&nbsp;пароль'
        });

        this.children.submit = new ButtonComponent({
            text: 'Зарегистрироваться',
            events: {
                click: (e) => {
                    e.preventDefault();

                    SignupApi.signIn(getFormData(e)).then((res: any) => {
                        if (res.status === 400) {
                            console.log('Error');
                        } else {
                            router.go('/messenger');
                        }
                    });
                }
            }
        });
    }

    render() {
        return this.compile(signupTemplate, this.props);
    }
}
