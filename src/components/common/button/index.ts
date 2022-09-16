import Component from "../../../services/Component";
import {buttonTemplate} from "./button.template";

export class ButtonComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(buttonTemplate, this.props);
    }
}
