function required(value) {
    return value ? [] : ['This field cannot be empty'];
}

function phone(value) {
    return /^\d*$/.test(value) ? [] : ['This phone number is invalid'];
}

function email(value) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(value) ? [] : ['This email address is invalid'];
}

export function combineValidators(...validators) {
    return value => validators.map(validator => validator(value)).reduce((acc, error) => [...acc, ...error], []);
}

export const validators = { required, email, phone };