import Component from "../../../services/Component";
import {textareaTemplate} from "./textarea.template";

export class MessengerTextareaComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(textareaTemplate, this.props);
    }
}
