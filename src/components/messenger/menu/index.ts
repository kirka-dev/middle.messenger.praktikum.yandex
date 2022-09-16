import Component from "../../../services/Component";
import {menuTemplate} from "./menu.template";
import {MessengerMenuItemComponent} from "../menu-item";
import {router} from "../../../index";
import store, {StoreUpdates} from "../../../services/Store";
import MessengerApi from "../../../pages/messenger/messenger.api";
import {ModalsEnum} from "../../modals/modals.enum";

export class MessengerMenuComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    initChildren() {
        this.children.settings = new MessengerMenuItemComponent({
            text: 'Настройки профиля',
            events: {
                click: () => {
                    store.set('showMessengerMenu', false, StoreUpdates.SHOW_MESSENGER_MENU);
                    router.go('/settings');
                }
            }
        });
        this.children.addChat = new MessengerMenuItemComponent({
            text: 'Добавить чат',
            events: {
                click: () => {
                    store.set('showMessengerMenu', false, StoreUpdates.SHOW_MESSENGER_MENU);
                    store.set('modal', ModalsEnum.ADD_CHAT, StoreUpdates.ACTIVE_MODAL)
                }
            }
        });


        store.on(StoreUpdates.CHAT, () => {
            this.children.addUser = new MessengerMenuItemComponent({
                text: 'Добавить пользователя',
                events: {
                    click: () => {
                        store.set('showMessengerMenu', false, StoreUpdates.SHOW_MESSENGER_MENU);
                        store.set('modal', ModalsEnum.ADD_USER, StoreUpdates.ACTIVE_MODAL)
                    }
                }
            });
            this.children.removeUser = new MessengerMenuItemComponent({
                text: 'Удалить пользователя',
                events: {
                    click: () => {
                        store.set('showMessengerMenu', false, StoreUpdates.SHOW_MESSENGER_MENU);
                        store.set('modal', ModalsEnum.REMOVE_USER, StoreUpdates.ACTIVE_MODAL)
                    }
                }
            });

            this.eventBus().emit(Component.EVENTS.FLOW_CDU);
        });

        store.on(StoreUpdates.SHOW_MESSENGER_MENU, () => {
            this.setProps({show: store.getState('showMessengerMenu')});
        })
    }

    render() {
        return this.compile(menuTemplate, this.props);
    }
}
