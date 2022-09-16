export default function getFormData(e) {
    const form = e.target.parentElement.closest('form');
    const formData = new FormData(form);
    const result = {};

    for (const [key, value] of formData) {
        result[key] = value;
    }

    return result;
}
