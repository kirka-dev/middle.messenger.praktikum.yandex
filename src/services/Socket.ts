import store, {StoreUpdates} from "./Store";
import * as events from "events";

export default class Socket {
    private socket: WebSocket;
    private readonly token: string;

    constructor(token: string) {
        this.token = token;
        this.init();
    }

    init() {
        const user = store.getState('user');
        const chat = store.getState('chat');

        this.remove();

        this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${user.id}/${chat.chat_id}/${this.token}`);

        this._addEvents();
    }

    remove() {
        const socket = store.getState('socket');

        if (socket) {
            socket.close();
        }
    }

    _addEvents() {
        this.socket.addEventListener('open', () => {
            console.log('Соединение установлено');

            store.set('socket', this.socket, StoreUpdates.SOCKET);

            this.socket.send(JSON.stringify({
                content: '0',
                type: 'get old',
            }));
        });

        this.socket.addEventListener('close', event => {
            if (event.wasClean) {
                console.log('Соединение закрыто чисто');
            } else {
                console.log('Обрыв соединения');
            }

            console.log(`Код: ${event.code} | Причина: ${event.reason}`);
        });

        this.socket.addEventListener('message', event => {
            console.log('Получены данные');

            const messages = JSON.parse(event.data);
            const current = store.getState('user').id;

            if (Array.isArray(messages)) {
                messages.forEach(message => {
                    if (message.user_id !== current) {
                        message.input = true;
                    }
                })

                store.set('messages', messages, StoreUpdates.MESSAGES);
            } else {
                if (messages.user_id !== current) {
                    messages.input = true;
                }

                store.push('messages', messages, StoreUpdates.MESSAGES);
            }
        });

        this.socket.addEventListener('error', event => {
            console.log('Ошибка', event.message);
        });
    }
}
