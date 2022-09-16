import Component from "../../../services/Component";
import {messengerButtonTemplate} from "./button.template";

export class MessengerButtonComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(messengerButtonTemplate, this.props);
    }
}
