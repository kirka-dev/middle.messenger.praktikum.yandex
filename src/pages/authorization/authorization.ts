import * as pug from "pug";
import {Block} from "../../services/Block";
import {authorization} from "./authorization.tmpl";

export class Authorization extends Block {
    constructor(props: any) {
        super(props);
    }

    public render() {
        const compiledFunction = pug.compile(authorization);

        return compiledFunction(this.props);
    }
}
