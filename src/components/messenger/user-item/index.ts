import Component from "../../../services/Component";
import {userItemTemplate} from "./user-item.template";

export class UserItemComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(userItemTemplate, this.props);
    }
}
