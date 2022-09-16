import {HTTPTransport} from "./../../services/HTTPTransport";

const settingsApiInstance = new HTTPTransport();

class SignupApi {
    signIn(data) {
        return settingsApiInstance.post('https://ya-praktikum.tech/api/v2/auth/signup', {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify(data)
        });
    }
}

export default new SignupApi();
