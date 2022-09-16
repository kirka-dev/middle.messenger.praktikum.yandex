import Component from "../../../services/Component";
import {messageTemplate} from "./message.template";

export class MessengerMessageComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(messageTemplate, this.props);
    }
}
