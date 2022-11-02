import Component from "../../../services/Component";
import {headerTemplate} from "./header.template";
import {MessengerMenuButtonComponent} from "../menu-button";
import {MessengerMenuComponent} from "../menu";
import store, {StoreUpdates} from "../../../services/Store";
import {AddChatModalComponent} from "../../modals/add-chat";
import {ModalsEnum} from "../../modals/modals.enum";
import {AddUserModalComponent} from "../../modals/add-user";
import {RemoveUserModalComponent} from "../../modals/remove-user";

export class MessengerHeaderComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    initChildren() {
        this.children.menuButton = new MessengerMenuButtonComponent({
            events: {
                click: () => store.set(
                    'showMessengerMenu',
                    !store.getState('showMessengerMenu'),
                    StoreUpdates.SHOW_MESSENGER_MENU
                )
            }
        });
        this.children.menu = new MessengerMenuComponent();

        store.on(StoreUpdates.ACTIVE_MODAL, () => {
            const modal = store.getState('modal');
            const modalBlock = document.getElementById('modal');

            modalBlock.innerHTML = '';
            if (modal) {
                if (modal === ModalsEnum.ADD_CHAT) {
                    modalBlock.append(new AddChatModalComponent().getContent());
                } else if (modal === ModalsEnum.ADD_USER) {
                    modalBlock.append(new AddUserModalComponent().getContent());
                } else if (modal === ModalsEnum.REMOVE_USER) {
                    modalBlock.append(new RemoveUserModalComponent().getContent());
                }
                modalBlock.classList.add('messenger-header__modal_show');
            } else {
                modalBlock.classList.remove('messenger-header__modal_show');
            }
        });
    }

    render() {
        return this.compile(headerTemplate, this.props);
    }
}
