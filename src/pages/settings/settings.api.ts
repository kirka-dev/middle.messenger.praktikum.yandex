import {HTTPTransport} from "../../services/HTTPTransport";
import store, {StoreUpdates} from "../../services/Store";

const settingsApiInstance = new HTTPTransport();

class SettingsApi {
    getUserInfo() {
        settingsApiInstance.get('https://ya-praktikum.tech/api/v2/auth/user')
            .then((data: any) => {
                if (data.status === 401) {
                    throw 'Error';
                }

                return JSON.parse(data.response);
            }).then(user => {
                store.set('user', user, StoreUpdates.USER);
            })
    }

    changeUserProfile(data: any) {
        return settingsApiInstance.put('https://ya-praktikum.tech/api/v2/user/profile', {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify({
                first_name: data.first_name,
                second_name: data.second_name,
                display_name: data.display_name,
                login: data.login,
                email: data.email,
                phone: data.phone,
            })
        })
    }

    changeUserAvatar(data: any) {
        const formData = new FormData();
        formData.append('avatar', data.avatar);

        return settingsApiInstance.put('https://ya-praktikum.tech/api/v2/user/profile/avatar', {
            data: formData
        })
    }

    changeUserPassword(data: any) {
        return settingsApiInstance.put('https://ya-praktikum.tech/api/v2/user/password', {
            headers: {
                'content-type': 'application/json'
            },
            data: JSON.stringify({
                oldPassword: data.oldPassword,
                newPassword: data.newPassword,
            })
        })
    }

    logout() {
        return settingsApiInstance.post('https://ya-praktikum.tech/api/v2/auth/logout');
    }
}

export default new SettingsApi();
