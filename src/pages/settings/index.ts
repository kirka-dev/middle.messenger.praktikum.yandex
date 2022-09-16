import Component from "../../services/Component";
import {settingsTemplate} from "./settings.template";
import SettingsApi from "./settings.api";
import {InputComponent} from "../../components/common/input";
import {ButtonComponent} from "../../components/common/button";
import {FileInputComponent} from "../../components/common/file-input";
import {RouteButtonComponent} from "../../components/common/route-button";
import {router} from "../../index";
import getFormData from "../../utils/getFormData";
import store, {StoreUpdates} from "../../services/Store";

export class SettingsPage extends Component {
    constructor(props?) {
        super("div", props);
    }

    initChildren() {
        this.initNavigate();
        this.initProfileForm();
        this.initPasswordForm();
        this.initAvatarForm();
    }

    initNavigate() {
        this.children.routeButtonMessenger = new RouteButtonComponent({
            text: 'Мессенджер',
            events: {
                click: () => router.go('/messenger')
            }
        });

        this.children.routeButtonLogout = new RouteButtonComponent({
            text: 'Выйти',
            events: {
                click: () => SettingsApi.logout().then((data: any) => {
                    if (data.status === 200) {
                        router.go('/')
                    }

                    throw 'Error';
                })
            }
        });
    }

    initProfileForm() {
        const user = store.getState('user');

        if (!user) {
            SettingsApi.getUserInfo();

            store.on(StoreUpdates.USER, () => {
                const user = store.getState('user');

                this.setProps({...store.getState('user')});

                this.children.email.setProps({value: user.email});
                this.children.login.setProps({value: user.login});
                this.children.firstName.setProps({value: user.first_name});
                this.children.secondName.setProps({value: user.second_name});
                this.children.displayName.setProps({value: user.display_name});
                this.children.phone.setProps({value: user.phone});
            });
        }

        this.children.email = new InputComponent({
            placeholder: 'E-Mail',
            name: 'email',
            value: user && user.email
        });

        this.children.login = new InputComponent({
            placeholder: 'Логин',
            name: 'login',
            value: user && user.login
        });

        this.children.firstName = new InputComponent({
            placeholder: 'Имя',
            name: 'first_name',
            value: user && user.first_name
        });

        this.children.secondName = new InputComponent({
            placeholder: 'Фамилия',
            name: 'second_name',
            value: user && user.second_name
        });

        this.children.displayName = new InputComponent({
            placeholder: 'Отображаемое&nbsp;имя',
            name: 'display_name',
            value: user && user.display_name
        });

        this.children.phone = new InputComponent({
            placeholder: 'Телефон',
            name: 'phone',
            value: user && user.phone
        });

        this.children.submitProfile = new ButtonComponent({
            text: 'Сохранить изменения',
            events: {
                click: (e) => {
                    e.preventDefault();

                    SettingsApi.changeUserProfile(getFormData(e));
                }
            }
        });
    }

    initPasswordForm() {
        this.children.oldPassword = new InputComponent({
            placeholder: 'Пароль',
            name: 'oldPassword'
        });

        this.children.newPassword = new InputComponent({
            placeholder: 'Новый&nbsp;пароль',
            name: 'newPassword'
        });

        this.children.submitPassword = new ButtonComponent({
            text: 'Поменять пароль',
            events: {
                click: (e) => {
                    e.preventDefault();

                    SettingsApi.changeUserPassword(getFormData(e));
                }
            }
        });
    }

    initAvatarForm() {
        this.children.fileInput = new FileInputComponent({
            name: 'avatar'
        });

        this.children.submitAvatar = new ButtonComponent({
            text: 'Поменять аватар',
            events: {
                click: (e) => {
                    e.preventDefault();

                    SettingsApi.changeUserAvatar(getFormData(e));
                }
            }
        });
    }

    render() {
        return this.compile(settingsTemplate, this.props);
    }
}
