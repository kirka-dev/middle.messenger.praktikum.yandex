import {HTTPTransport} from "../../services/HTTPTransport";
import store, {StoreUpdates} from "../../services/Store";
import Socket from "../../services/Socket";

const messengerApiInstance = new HTTPTransport();

class MessengerApi {
    getChats() {
        messengerApiInstance.get('https://ya-praktikum.tech/api/v2/chats')
            .then((data: any) => {
                return JSON.parse(data.response);
            }).then(chats => store.set('chatList', chats, StoreUpdates.CHAT_LIST))
    }

    createChat(data) {
        messengerApiInstance.post('https://ya-praktikum.tech/api/v2/chats', {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(data)
        }).then(() => this.getChats());
    }

    getChatUsers(id) {
        return messengerApiInstance.get(`https://ya-praktikum.tech/api/v2/chats/${id}/users`)
            .then((data: any) => {
                if (data.status === 400) {
                    store.set('chat', null, StoreUpdates.CHAT)
                    store.set('modal', null, StoreUpdates.ACTIVE_MODAL);
                    this.getChats();
                }
                return JSON.parse(data.response);
            });
    }

    deleteUsersFromChat(user: any[], chat) {
        return messengerApiInstance.delete(`https://ya-praktikum.tech/api/v2/chats/users`, {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify({
                "users": user,
                "chatId": chat
            })
        });
    }

    addUsersToChat(user: any[], chat) {
        return messengerApiInstance.put(`https://ya-praktikum.tech/api/v2/chats/users`, {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify({
                "users": user,
                "chatId": chat
            })
        });
    }

    searchUsersByLogin(data) {
        return messengerApiInstance.post(`https://ya-praktikum.tech/api/v2/user/search`, {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(data)
        }).then((data) => JSON.parse(data.response));
    }

    connectChat(id) {
        messengerApiInstance.post(`https://ya-praktikum.tech/api/v2/chats/token/${id}`, {
            headers: {
                'content-type': 'application/json'
            }
        }).then((data: any) => {
            return JSON.parse(data.response);
        }).then((response) => {
            new Socket(response.token);
        })
    }
}

export default new MessengerApi();
