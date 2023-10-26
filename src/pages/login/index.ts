import Component from "../../services/Component";
import getFormData from "../../utils/getFormData";
import {loginTemplate} from "./login.template";
import {InputComponent} from "../../components/common/input";
import {ButtonComponent} from "../../components/common/button";
import {RouteButtonComponent} from "../../components/common/route-button";
import {router} from "../../index";
import LoginApi from "./login.api";

export class LoginPage extends Component {
    constructor(props?) {
        super("div", props);
    }

    initChildren() {
        this.children.routeButton = new RouteButtonComponent({
            text: 'Регистрация',
            events: {
                click: () => router.go('/sign-up')
            }
        });

        this.children.login = new InputComponent({
            placeholder: 'Логин',
            name: 'login'
        });

        this.children.password = new InputComponent({
            placeholder: 'Пароль',
            name: 'password'
        });

        this.children.submit = new ButtonComponent({
            text: 'Войти',
            events: {
                click: (e) => {
                    e.preventDefault();

                    LoginApi.signIn(getFormData(e)).then((res: any) => {
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
        return this.compile(loginTemplate, this.props);
    }
}
