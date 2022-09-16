import Component from "../../../services/Component";
import {routeButtonTemplate} from "./route-button.template";

export class RouteButtonComponent extends Component {
    constructor(props?) {
        super("div", props);
    }

    render() {
        return this.compile(routeButtonTemplate, this.props);
    }
}
