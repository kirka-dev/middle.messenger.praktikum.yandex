import {compile} from "pug";
// @ts-ignore
import {v4 as makeUUID} from "uuid";
import {EventBus} from "./EvenBus";
import {inputValidate} from "../utils/validate";

export class Block {
    private readonly _id: any;
    private children: {};
    private eventBus: () => EventBus;
    props: any;

    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    _element = null;
    _meta = null;

    constructor(propsAndChildren = {}, tagName = 'template') {
        const eventBus = new EventBus();
        const { children, props } = this._getChildren(propsAndChildren);

        this._meta = {tagName, props};
        this._id = makeUUID();
        this.props = this._makePropsProxy({ ...props, __id: this._id });
        this.children = children;
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);

        eventBus.emit(Block.EVENTS.INIT);
    }

    _registerEvents(eventBus) {
        eventBus.on(Block.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _getChildren(propsAndChildren) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Block) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();

        this.eventBus().emit(Block.EVENTS.FLOW_RENDER);
    }

    _componentDidMount() {
        this.componentDidMount();

        Object.values(this.children).forEach(child => {
            child.dispatchComponentDidMount();
        });
    }

    componentDidMount(oldProps?) {}

    dispatchComponentDidMount() {
        this.eventBus().emit(Block.EVENTS.FLOW_CDM);
    }

    _componentDidUpdate(oldProps, newProps) {
        const response = this.componentDidUpdate(oldProps, newProps);
        if (!response) {
            return;
        }
        this._render();
    }

    componentDidUpdate(oldProps, newProps) {
        return true;
    }

    setProps = nextProps => {
        if (!nextProps) {
            return;
        }

        this.eventBus().emit(Block.EVENTS.FLOW_CDU);
        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    compile(template, props) {
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]) => {
            propsAndStubs[key] = `plug data-id="${child._id}"`;
        });

        const fragment = this._createDocumentElement('template');
        const compileFunc = compile(template)

        fragment.innerHTML = compileFunc(propsAndStubs);

        Object.values(this.children).forEach(child => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);
            stub.replaceWith(child.getContent());
        });

        return fragment.content;
    }

    _render() {
        const block = this.render();
        this._element.appendChild(block);
        this._addEvents();
        this._addValidate();
    }

    render() {}

    getContent() {
        return this.element.firstChild;
    }

    _makePropsProxy(props) {
        const self = this;

        return new Proxy(props, {
            get(target, prop) {
                const value = target[prop];
                return typeof value === "function" ? value.bind(target) : value;
            },
            set(target, prop, value) {
                target[prop] = value;

                self.eventBus().emit(Block.EVENTS.FLOW_CDU, {...target}, target);
                return true;
            },
            deleteProperty() {
                throw new Error("Нет доступа");
            }
        });
    }

    _createDocumentElement(tagName) {
        const element = document.createElement(tagName);
        element.setAttribute('data-id', this._id);
        return element;
    }

    _addEvents() {
        this.props.events && Object.keys(this.props.events).forEach(eventName => {
            this._element.firstChild.addEventListener(eventName, this.props.events[eventName]);
        });

        this.props.childEvents && Object.keys(this.props.childEvents).forEach(child => {
            Object.keys(this.props.childEvents[child]).forEach(eventName => {
                this._element.querySelector(child).addEventListener(eventName, this.props.childEvents[child][eventName]);
            });
        });
    }

    _addValidate() {
        this._element.firstChild.querySelectorAll('input').forEach(input => {
            input.addEventListener('blur', e => inputValidate(e.target))
        })
    }
}
