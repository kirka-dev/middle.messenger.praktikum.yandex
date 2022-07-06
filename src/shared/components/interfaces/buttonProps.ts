interface ButtonEvents {
    click?: (e: Event) => void;
    focus?: (e: Event) => void;
    blur?: (e: Event) => void;
}

export interface ButtonProps {
    text: string;
    events: ButtonEvents
}
