import Component from "../../../services/Component";
import {removeUserTemplate} from "./remove-user.template";
import {InputComponent} from "../../common/input";
import {RouteButtonComponent} from "../../common/route-button";
import store, {StoreUpdates} from "../../../services/Store";
import {UserItemComponent} from "../../messenger/user-item";
import MessengerApi from "../../../pages/messenger/messenger.api";

export class RemoveUserModalComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    initChildren() {
        this.children.title = new InputComponent({
            placeholder: 'Логин',
            name: 'title',
        })

        this.children.close = new RouteButtonComponent({
            text: 'Закрыть',
            events: {
                click: () => store.set('modal', null, StoreUpdates.ACTIVE_MODAL)
            }
        })

        this.setUserList();
    };

    setUserList() {
        const chat = store.getState('chat');

        chat && MessengerApi.getChatUsers(chat.chat_id).then(users => {
            const userListBlock = document.getElementById('user-list');

            if (userListBlock) {
                userListBlock.innerHTML = '';
                users && users.map(user => {
                    userListBlock.append(
                        new UserItemComponent({
                            user,
                            type: 'remove',
                            events: {
                                click: () => MessengerApi.deleteUsersFromChat([user.id], chat.chat_id).then((res) => {
                                    this.setUserList()
                                })
                            }}).getContent())
                })
            }
        })
    }

    render() {
        return this.compile(removeUserTemplate, this.props);
    }
}
