import {Block} from "../../../../shared/services/Block";

import {inputTmpl} from "./input.tmpl";

export class Input extends Block {
    constructor(props: any) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(inputTmpl, this.props);
    }
}
