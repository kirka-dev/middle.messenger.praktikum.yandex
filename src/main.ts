import 'normalize.css';
import {Block} from "./services/Block";
import {render} from "./utils/Render";
import {Chat, Components as ChatComponents} from "./pages/chat/chat";
import {ErrorPage} from "./pages/errorPage/errorPage";

document.addEventListener("DOMContentLoaded", () => {
    let page: Block;
    switch(document.location.pathname) {
        case "/404":
            page = new ErrorPage({code: 404});
            break;
        case "/chat":
            page = new Chat({...ChatComponents});
            break;
        default:
            page = new Chat({...ChatComponents});
    }

    render('.app', page);
});
