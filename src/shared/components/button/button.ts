import {Block} from "../../services/Block";
import {ButtonProps} from "../interfaces/buttonProps";

import {buttonTmpl} from "./button.tmpl";

export class Button extends Block {
    constructor(props: ButtonProps) {
        super(props);
    }

    render(): DocumentFragment {
        return this.compile(buttonTmpl, this.props);
    }
}
