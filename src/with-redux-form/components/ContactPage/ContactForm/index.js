import React from 'react'
import {connect} from 'react-redux'
import {reduxForm, formValueSelector} from 'redux-form'
import {alphaNumeric, isEmail, phoneNumber, required} from './validators'
import {DecoratedField} from "./DecoratedField";

const validations = ({name, email, question, phone}) => ({
    'name': required(name),
    'email': required(email) || isEmail(email),
    'question': required(question),
    'phone': required(phone) || phoneNumber(phone)
});

const warnings = ({name}) => ({
    'name': alphaNumeric(name)
});

let ContactForm = props => {
    const {handleSubmit, canContactByPhoneValue} = props;
    return (
        <form onSubmit={handleSubmit}>
            <DecoratedField
                name="name"
                label="Your name"
                placeholder="Type your name here"
                type="text"
                // validate={required}
                // warn={alphaNumeric}
            />
            <DecoratedField
                name="email"
                label="E-mail"
                placeholder="Type your email here"
                type="email"
                // validate={[required, email]}
            />
            <DecoratedField
                name="question"
                label="Question"
                placeholder="Type your question here"
                type="textarea"
                // validate={[required]}
            />
            <DecoratedField
                label="Can contact by phone number?"
                name="canContactByPhone"
                type="checkbox"
            />
            {canContactByPhoneValue && (
                <DecoratedField
                    name="phone"
                    label="Phone Number"
                    type="phone"
                    placeholder="Type your phone number"
                    // validate={[required, phoneNumber]}
                />
            )}
            <br/>
            <button type="submit">Submit</button>
        </form>
    )
};

ContactForm = reduxForm({
    // a unique name for the form
    form: 'contact',
    validate: validations,
    warn: warnings
})(ContactForm);

// Decorate with connect to read form values
ContactForm = connect(state => {
    const canContactByPhoneValue = formValueSelector('contact')(state, 'canContactByPhone');
    return {
        canContactByPhoneValue
    }
})(ContactForm);

export default ContactForm