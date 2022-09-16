import Component from "../../../services/Component";
import {itemTemplate} from "./item.template";

export class MessengerItemComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(itemTemplate, this.props);
    }
}
