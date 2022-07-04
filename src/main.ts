import 'normalize.css';
import {Block} from "./shared/services/Block";
import {render} from "./shared/utils/Render";
import {Authorization, Components as AuthorizationComponents} from "./pages/authorization/authorization";
import {Registration, Components as RegistrationComponent} from "./pages/registration/registration";
import {UserSettings, Components as UserSettingsComponent} from "./pages/user-settings/user-settings";
import {Chat, Components as ChatComponents} from "./pages/chat/chat";
import {ErrorPage} from "./pages/errorPage/errorPage";

document.addEventListener("DOMContentLoaded", () => {
    let page: Block;
    switch(document.location.pathname) {
        case "/authorization":
            page = new Authorization({...AuthorizationComponents})
            break;
        case "/registration":
            page = new Registration({...RegistrationComponent})
            break;
        case "/settings":
            page = new UserSettings({...UserSettingsComponent})
            break;
        case "/chat":
            page = new Chat({...ChatComponents});
            break;
        default:
            page = new ErrorPage({code: 404});
    }

    render('.app', page);
});
