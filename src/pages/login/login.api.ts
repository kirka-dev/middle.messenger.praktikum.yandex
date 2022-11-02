import {HTTPTransport} from "./../../services/HTTPTransport";

const settingsApiInstance = new HTTPTransport();

class LoginApi {
    signIn(data) {
        return settingsApiInstance.post('https://ya-praktikum.tech/api/v2/auth/signin', {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(data)
        });
    }
}

export default new LoginApi();
