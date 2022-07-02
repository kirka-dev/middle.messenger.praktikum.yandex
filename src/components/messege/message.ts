import * as pug from "pug";
import {Block} from "../../services/Block";
import {message} from "./message.tmpl";

export class Message extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        const compiledFunction = pug.compile(message);
        return compiledFunction(this.props);
    }
}
