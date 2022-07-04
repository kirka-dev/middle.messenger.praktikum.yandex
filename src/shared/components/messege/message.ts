import {Block} from "../../services/Block";
import {messageTmpl} from "./message.tmpl";

export class Message extends Block {
    constructor(props: any) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(messageTmpl, this.props);
    }
}
