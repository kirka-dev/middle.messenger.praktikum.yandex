import {PATTERNS} from "../consts/patterns";

function addError(wrapper: HTMLElement, message: string, className: string) {
    wrapper.classList.add(`${className}_error`);
    wrapper.querySelector(`.${className}__error`) && (wrapper.querySelector(`.${className}__error`).textContent = message);
}

function removeError(wrapper: HTMLElement, className: string) {
    wrapper.classList.remove(`${className}_error`);
    wrapper.querySelector(`.${className}__error`) && (wrapper.querySelector(`.${className}__error`).textContent = null);
}

export function inputValidate(input: any) {
    const wrapper = input.parentElement;
    const className = wrapper.className.split(' ')[0];
    const state = {
        pattern: PATTERNS[input.dataset.pattern] || null,
        required: input.getAttribute('required') ? true : false,
    }
    const valid = input.value.match(state.pattern);

    if (state.required && !input.value) {
        addError(wrapper, 'Обязательное поле', className);
    }else if (state.pattern && !valid) {
        addError(wrapper, 'Заполнено некорректно', className);
    } else {
        removeError(wrapper, className);
    }
}

export function formValidate(form: HTMLFormElement) {
    form.querySelectorAll('input').forEach(input => inputValidate(input));
}
