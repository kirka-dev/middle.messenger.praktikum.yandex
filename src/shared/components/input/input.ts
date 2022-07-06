import {Block} from "../../services/Block";
import {InputProps} from "../interfaces/inputProps";

import {inputTmpl} from "./input.tmpl";

export class Input extends Block {
    constructor(props: InputProps) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(inputTmpl, this.props);
    }
}
