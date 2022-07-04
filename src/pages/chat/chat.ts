import {Block} from "../../shared/services/Block";
import {Message} from "../../shared/components/messege/message";

import {chatTmpl} from "./chat.tmpl";

export class Chat extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return this.compile(chatTmpl, this.props);
    }
}

const message = new Message({
    text: 'text',
    className: 'messages-list__message',
    events: {
        click: () => alert('a')
    }
});

export const Components = {
    message
}
