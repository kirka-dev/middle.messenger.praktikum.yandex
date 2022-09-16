import Component from "../../../services/Component";
import {inputTemplate} from "./input.template";

export class InputComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(inputTemplate, this.props);
    }
}
