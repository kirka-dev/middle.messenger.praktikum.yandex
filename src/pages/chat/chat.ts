import {Block} from "../../shared/services/Block";
import {Message} from "./components/messege/message";

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
    text: 'Тук-тук',
    className: 'messages-list__message messages-list__message_input',
});

export const Components = {
    message
}
