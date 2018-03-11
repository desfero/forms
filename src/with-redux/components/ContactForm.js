import React, {Component} from "react";
import {Input} from "./Input";
import {Field, formValues, reduxForm} from "redux-form";

import {validators, combineValidators} from '../validators';

class ContactFormBase extends Component {
    emailValidator = combineValidators(validators.required, validators.email);
    phoneValidator = combineValidators(validators.required, validators.phone);

    submit(values) {
        // TODO find solution for invoking submit function inside form component
        console.log(values);
    };

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.submit)}>
                <Field component={Input}
                       name="name"
                       validate={validators.required}
                       placeholder="Type your name here"
                       label="Your name"
                >
                    {({value, onChange, onBlur, placeholder}) => (
                        <input
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    )}
                </Field>

                <Field component={Input}
                       name="email"
                       validate={this.emailValidator}
                       placeholder="Type your email here"
                       label="E-mail"
                >
                    {({value, onChange, onBlur, placeholder}) => (
                        <input
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    )}
                </Field>

                <Field component={Input}
                       name="question"
                       validate={validators.required}
                       placeholder="Type your question here"
                       label="Question"
                >
                    {({value, onChange, onBlur, placeholder}) => (
                        <textarea
                            placeholder={placeholder}
                            value={value}
                            onChange={onChange}
                            onBlur={onBlur}
                        />
                    )}
                </Field>

                <Field component={Input}
                       name="canContactByPhone"
                       label="Can contact by phone number?"
                >
                    {({value, onChange}) => (
                        <input
                            type="checkbox"
                            checked={value}
                            onChange={onChange}
                        />
                    )}
                </Field>

                {this.props.canContactByPhone && (
                    <Field component={Input}
                           name="phone"
                           validate={this.phoneValidator}
                           placeholder="Type your phone number"
                           label="Phone number"
                    >
                        {({value, onChange, onBlur, placeholder}) => (
                            <input
                                placeholder={placeholder}
                                value={value}
                                onChange={onChange}
                                onBlur={onBlur}
                            />
                        )}
                    </Field>
                )}
                <button type="submit" onClick={this.submit}>
                    Submit
                </button>
            </form>
        );
    }
}

export const ContactForm = reduxForm({
    form: 'ContactForm'
})(formValues('canContactByPhone')(ContactFormBase));
