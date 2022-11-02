import Router from "./services/Router";
import {LoginPage} from "./pages/login";
import {MessengerPage} from "./pages/messenger";
import {SettingsPage} from "./pages/settings";
import {SignupPage} from "./pages/signup";
import SettingsApi from "./pages/settings/settings.api";

export const router = new Router("root");

router
    .use("/", LoginPage)
    .use("/messenger", MessengerPage)
    .use("/settings", SettingsPage)
    .use("/sign-up", SignupPage)
    .start();

SettingsApi.getUserInfo();
