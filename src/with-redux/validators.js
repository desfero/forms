function required(value) {
    return value ? undefined : ['This field cannot be empty'];
}

function phone(value) {
    return /^\d*$/.test(value) ? undefined : ['This phone number is invalid'];
}

function email(value) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        .test(value) ? undefined : ['This email address is invalid'];
}

export function combineValidators(...validators) {
    return (...args) => {
      const errors = validators
          .map(validator => validator(...args))
          .filter(value => !!value)
          .reduce((acc, error) => [...acc, ...error], []);
      return errors.length ? errors : undefined;
    };
}

export const validators = { required, email, phone };