import Component from "../../../services/Component";
import {addUserTemplate} from "./add-user.template";
import {InputComponent} from "../../common/input";
import {RouteButtonComponent} from "../../common/route-button";
import store, {StoreUpdates} from "../../../services/Store";
import MessengerApi from "../../../pages/messenger/messenger.api";
import {UserItemComponent} from "../../messenger/user-item";
import {ButtonComponent} from "../../common/button";
import getFormData from "../../../utils/getFormData";

export class AddUserModalComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    initChildren() {
        this.children.search = new InputComponent({
            placeholder: 'Логин',
            name: 'login'
        })

        this.children.close = new RouteButtonComponent({
            text: 'Закрыть',
            events: {
                click: () => store.set('modal', null, StoreUpdates.ACTIVE_MODAL)
            }
        })

        this.children.button = new ButtonComponent({
            text: 'Поиск',
            events: {
                click: (e) => {
                    e.preventDefault();
                    MessengerApi.searchUsersByLogin(getFormData(e)).then((users) => {
                        this.setUserList(users);
                    });
                }
            }
        })

        this.setUserList(null)
    };

    setUserList(users) {
        const chat = store.getState('chat');
        const userListBlock = document.getElementById('user-list');

        if (userListBlock) {
            userListBlock.innerHTML = '';
            users && users.map(user => {
                userListBlock.append(
                    new UserItemComponent({
                        user,
                        type: 'add',
                        events: {
                            click: () => MessengerApi.addUsersToChat([user.id], chat.chat_id)
                        }
                    }).getContent())
            })
        }
    }

    render() {
        return this.compile(addUserTemplate, this.props);
    }
}
