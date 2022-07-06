interface InputAttribute {
    id: string;
    name?: string;
    type?: string;
    required?: boolean;
    'data-pattern'?: string;
}

interface InputEvents {
    click?: (e: Event) => void;
    focus?: (e: Event) => void;
    blur?: (e: Event) => void;
}

interface InputChildEvents {
    input?: InputEvents;
}

export interface InputProps {
    placeholder: string;
    attributes: InputAttribute;
    events?: InputEvents;
    childEvents?: InputChildEvents;
}
