import Component from "../services/Component";

export type Child<T = Component> = {
    [key in number]: T;
}
