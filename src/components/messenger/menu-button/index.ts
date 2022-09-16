import Component from "../../../services/Component";
import {menuButtonTemplate} from "./menu-button.template";

export class MessengerMenuButtonComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(menuButtonTemplate, this.props);
    }
}
