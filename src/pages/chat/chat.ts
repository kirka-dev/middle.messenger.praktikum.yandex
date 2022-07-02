import * as pug from "pug";
import {Block} from "../../services/Block";
import {chat} from "./chat.tmpl";
import {Message} from "../../components/messege/message";

export class Chat extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        const compiledFunction = pug.compile(chat);

        return compiledFunction(this.props);
    }
}

const message = new Message({
    text: 'text',
    events: {
        click: () => alert('a')
    }
}).getContent();

export const Components = {
    message
}
