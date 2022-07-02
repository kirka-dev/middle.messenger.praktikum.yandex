import * as pug from "pug";
import {Block} from "../../services/Block";
import {errorPage} from "./errorPage.tmpl";

export class ErrorPage extends Block {
    constructor(props: any) {
        super(props);
    }

    render() {
        const compiledFunction = pug.compile(errorPage);
        return compiledFunction(this.props);
    }
}
