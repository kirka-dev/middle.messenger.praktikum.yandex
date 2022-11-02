import Component from "../../../services/Component";
import {fileInputTemplate} from "./file-input.template";

export class FileInputComponent extends Component {
    constructor(props?) {
        super("div", {...props, childEvents: {
            input: {
                onchange: () => alert('a')
            }
        }});
    }

    render() {
        return this.compile(fileInputTemplate, this.props);
    }
}
