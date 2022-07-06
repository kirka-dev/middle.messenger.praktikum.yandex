import {Block} from "../../shared/services/Block";

import {errorPageTmpl} from "./errorPage.tmpl";

export class ErrorPage extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        return this.compile(errorPageTmpl, this.props);
    }
}
