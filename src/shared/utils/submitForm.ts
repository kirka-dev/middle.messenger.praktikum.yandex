import {formValidate} from "./validate";

export function submitForm(event, query) {
    const data = new FormData(document.querySelector('form'));
    const result = {};

    for (const [key, value] of data) {
        result[key] = value;
    }

    formValidate(document.querySelector('form'));

    console.log(result);
    event.preventDefault();
}
