import {Block} from "../../services/Block";

import {buttonTmpl} from "./button.tmpl";

export class Button extends Block {
    constructor(props: any) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(buttonTmpl, this.props);
    }
}
