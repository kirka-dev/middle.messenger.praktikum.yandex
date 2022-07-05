import {PATTERNS} from "../consts/patterns";

export function inputValidate(input: HTMLInputElement) {
    const wrapper = input.parentElement;
    const className = wrapper.className.split(' ')[0];
    const state = {
        pattern: PATTERNS[input.dataset.pattern] || null,
        required: input.getAttribute('required') ? true : false,
    }
    const valid = input.value.match(state.pattern);

    if (state.required && !input.value) {
        wrapper.classList.add(`${className}_error`);
        wrapper.querySelector(`.${className}__error`) && (wrapper.querySelector(`.${className}__error`).textContent = 'Обязательное поле');
    }else if (state.pattern && !valid) {
        wrapper.classList.add(`${className}_error`);
        wrapper.querySelector(`.${className}__error`) && (wrapper.querySelector(`.${className}__error`).textContent = 'Заполнено некорректно');
    } else {
        wrapper.classList.remove(`${className}_error`);
        wrapper.querySelector(`.${className}__error`) && (wrapper.querySelector(`.${className}__error`).textContent = null);
    }
}

export function formValidate(form: HTMLFormElement) {
    form.querySelectorAll('input').forEach(input => inputValidate(input));
}
