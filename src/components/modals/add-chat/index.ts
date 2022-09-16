import Component from "../../../services/Component";
import {addChatTemplate} from "./add-chat.template";
import {InputComponent} from "../../common/input";
import {ButtonComponent} from "../../common/button";
import getFormData from "../../../utils/getFormData";
import MessengerApi from "../../../pages/messenger/messenger.api";
import store, {StoreUpdates} from "../../../services/Store";
import {RouteButtonComponent} from "../../common/route-button";

export class AddChatModalComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    initChildren() {
        this.children.title = new InputComponent({
            placeholder: 'Название',
            name: 'title',
        })

        this.children.close = new RouteButtonComponent({
            text: 'Закрыть',
            events: {
                click: () => store.set('modal', null, StoreUpdates.ACTIVE_MODAL)
            }
        })

        this.children.button = new ButtonComponent({
            text: 'Добавить',
            events: {
                click: (e) => {
                    e.preventDefault();

                    store.set('modal', null, StoreUpdates.ACTIVE_MODAL);
                    MessengerApi.createChat(getFormData(e));
                }
            }
        })
    }

    render() {
        return this.compile(addChatTemplate, this.props);
    }
}
