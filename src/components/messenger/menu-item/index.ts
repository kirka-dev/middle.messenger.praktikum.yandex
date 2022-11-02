import Component from "../../../services/Component";
import {menuItemTemplate} from "./menu-item.template";

export class MessengerMenuItemComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(menuItemTemplate, this.props);
    }
}
