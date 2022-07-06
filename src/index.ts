// import 'normalize.css';
import {Block} from "./shared/services/Block";
import {render} from "./shared/utils/render";
import {Authorization, Components as AuthorizationComponents} from "./pages/authorization/authorization";
import {Registration, Components as RegistrationComponent} from "./pages/registration/registration";
import {UserSettings, Components as UserSettingsComponent} from "./pages/user-settings/user-settings";
import {Chat, Components as ChatComponents} from "./pages/chat/chat";
import {ErrorPage} from "./pages/errorPage/errorPage";

document.addEventListener("DOMContentLoaded", () => {
    let page: Block;
    switch(document.location.search) {
        case "":
            page = new Authorization({...AuthorizationComponents})
            break;
        case "?page=authorization":
            page = new Authorization({...AuthorizationComponents})
            break;
        case "?page=registration":
            page = new Registration({...RegistrationComponent})
            break;
        case "?page=settings":
            page = new UserSettings({...UserSettingsComponent})
            break;
        case "?page=chat":
            page = new Chat({...ChatComponents});
            break;
        case "?page=500":
            page = new ErrorPage({code: 500});
            break;
        default:
            page = new ErrorPage({code: 404});
    }

    render('.app', page);
});
