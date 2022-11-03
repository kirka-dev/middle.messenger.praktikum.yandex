import EventBus from "./EventBus";
import {v4 as makeUUID} from 'uuid';
import * as handlebars from "handlebars";
import {Child} from "../interfaces/component";

export default class Component {
    static EVENTS = {
        INIT: "init",
        FLOW_CDM: "flow:component-did-mount",
        FLOW_CDU: "flow:component-did-update",
        FLOW_RENDER: "flow:render"
    };

    _element = null;
    _meta = null;
    _id = null;

    protected readonly props: any;
    protected children: any;
    protected eventBus: () => EventBus;

    constructor(tagName = "div", propsAndChildren = {}) {
        const { children, props } = this._getChildren(propsAndChildren);
        const eventBus = new EventBus();

        this._meta = {tagName, props};
        this._id = makeUUID();
        this.props = this._makePropsProxy({ ...props, __id: this._id });
        this.children = children;
        this.eventBus = () => eventBus;
        this._registerEvents(eventBus);
        eventBus.emit(Component.EVENTS.INIT);
    }

    _getChildren(propsAndChildren) {
        const children = {};
        const props = {};

        Object.entries(propsAndChildren).forEach(([key, value]) => {
            if (value instanceof Component) {
                children[key] = value;
            } else {
                props[key] = value;
            }
        });

        return { children, props };
    }

    _registerEvents(eventBus) {
        eventBus.on(Component.EVENTS.INIT, this.init.bind(this));
        eventBus.on(Component.EVENTS.FLOW_CDM, this._componentDidMount.bind(this));
        eventBus.on(Component.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this));
        eventBus.on(Component.EVENTS.FLOW_RENDER, this._render.bind(this));
    }

    _createResources() {
        const { tagName } = this._meta;
        this._element = this._createDocumentElement(tagName);
    }

    init() {
        this._createResources();
        this.initChildren();

        this.eventBus().emit(Component.EVENTS.FLOW_RENDER);
    }

    initChildren() {
        return;
    }

    _componentDidMount() {
        this.componentDidMount();

        Object.values(this.children).forEach((child: any) => {
            child.dispatchComponentDidMount();
        });
    }

    componentDidMount(oldProps?) {}

    dispatchComponentDidMount() {
        this.eventBus().emit(Component.EVENTS.FLOW_CDM);
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

        Object.assign(this.props, nextProps);
    };

    get element() {
        return this._element;
    }

    compile(template, props) {
        const propsAndStubs = { ...props };

        Object.entries(this.children).forEach(([key, child]: any) => {
            propsAndStubs[key] = `<plug data-id="${child._id}"></plug>`
        });

        const fragment = this._createDocumentElement('template');

        const html = handlebars.compile(template);

        fragment.innerHTML = html(propsAndStubs);

        Object.values(this.children).forEach((child: any) => {
            const stub = fragment.content.querySelector(`[data-id="${child._id}"]`);

            stub && stub.replaceWith(child.getContent());
        });

        return fragment.content;
    }

    _render() {
        const block = this.render() as Node;
        //TODO: this._removeEvents();
        this._element.innerHTML = '';

        this._element.appendChild(block);

        this._addEvents();
    }

    render(): any {}

    getContent() {
        return this.element;
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

                // Запускаем обновление компоненты
                // Плохой cloneDeep, в следующей итерации нужно заставлять добавлять cloneDeep им самим
                self.eventBus().emit(Component.EVENTS.FLOW_CDU, {...target}, target);
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
        const {events = {}} = this.props;

        Object.keys(events).forEach(eventName => {
            this._element.firstChild.addEventListener(eventName, events[eventName]);
        });
    }

    show() {
        this.getContent().style.display = "block";
    }

    hide() {
        this.getContent().style.display = "none";
    }
}
