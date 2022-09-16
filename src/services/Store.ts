import EventBus from "./EventBus";
import set from "../utils/set";
import {Indexed} from "../interfaces/common";

export enum StoreUpdates {
    USER = 'USER',
    MESSENGER_USERS = 'MESSENGER_USERS',
    CHAT = 'CHAT',
    CHAT_LIST = 'CHAT_LIST',
    SOCKET = 'SOCKET',
    MESSAGES = 'MESSAGES',
    SHOW_MESSENGER_MENU = 'SHOW_MESSENGER_MENU',
    ACTIVE_MODAL = 'ACTIVE_MODAL',
}

class Store extends EventBus {
    private state: Indexed = {};

    public getState(path) {
        return this.state[path];
    }

    public set(path: string, value: unknown, event: StoreUpdates) {
        set(this.state, path, value);
        this.emit(event);
    };

    public push(path: string, value: unknown, event: StoreUpdates) {
        this.state[path].unshift(value);
        this.emit(event);
    };
}

export default new Store();
