export const PATTERNS = {
    name: /^([A-Z]{1})([a-z-])+$|^([А-Я]{1})([а-я-])+$/,
    login: /(^[a-z])([a-z0-9-_])+$|(^[0-9])([a-z0-9-_])+$/,
    email: /^[\w.-]+@([\w-]+\.)+[\w]{2,4}$/,
    password: /.*[0-9]+.*[A-Z]+.*|.*[A-Z]+.*[0-9]+.*/,
    phone: /^([+]?[0-9]\d{9,15})+$/,
};
