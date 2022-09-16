import Component from "../../services/Component";
import {messengerTemplate} from "./messenger.template";
import MessengerApi from "./messenger.api";
import {MessengerTextareaComponent} from "../../components/messenger/textarea";
import {MessengerButtonComponent} from "../../components/messenger/button";
import {MessengerItemComponent} from "../../components/messenger/item";
import store, {StoreUpdates} from "../../services/Store";
import {MessengerHeaderComponent} from "../../components/messenger/header";
import getFormData from "../../utils/getFormData";
import {MessengerMessageComponent} from "../../components/messenger/message";

export class MessengerPage extends Component {
    constructor(props?) {
        super("div", props);
    }

    initChildren() {
        this.initChatList();
        this.initChat();
        this.setSubscribers();
    }

    initChatList() {
        MessengerApi.getChats();
    }

    initChat() {
        this.children.header = new MessengerHeaderComponent();

        this.children.textarea = new MessengerTextareaComponent({
            placeholder: 'Сообщение...',
            name: 'content'
        });

        this.children.submit = new MessengerButtonComponent({
            text: 'Отправить'
        });
    }

    setSubscribers() {
        store.on(StoreUpdates.CHAT_LIST, () => {
            const chatList = store.getState('chatList');

            document.getElementById('chat-list').innerHTML = '';
            chatList.map(chat => {
                document.getElementById('chat-list').append(
                    new MessengerItemComponent({
                        chat,
                        events: {
                            click: () => store.set('chat', {
                                chat_id: chat.id,
                                chat_title: chat.title
                            }, StoreUpdates.CHAT)
                        }
                    }).getContent()
                )
            })
        });

        store.on(StoreUpdates.SOCKET, () => {
            const socket = store.getState('socket');

            this.children.submit.setProps({...{events: {
                        click: (e) => {
                            e.preventDefault();
                            socket.send(JSON.stringify({...getFormData(e), type: 'message'}));
                            this.children.textarea.setProps({value: null});
                        }
                    }}})
        });

        store.on(StoreUpdates.MESSAGES, () => {
            const messages = store.getState('messages');

            document.getElementById('messages').innerHTML = '';
            messages.map(message => {
                document.getElementById('messages').prepend(
                    new MessengerMessageComponent({message}).getContent()
                )
            })
        });

        store.on(StoreUpdates.CHAT, () => {
            const chat = store.getState('chat');

            if (chat) {
                this.children.header.setProps({...chat});
                MessengerApi.connectChat(chat.chat_id);
            }
        });
    }

    render() {
        return this.compile(messengerTemplate, {...this.props});
    }
}
