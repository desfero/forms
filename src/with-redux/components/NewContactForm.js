import React from 'react';
import {Fields, Field, reduxForm} from 'redux-form';

const style = {
    color: 'red',
    fontSize: '12px'
};

const InputFields = fields => (
    <div>
        <div>
            <label>Can contact by phone number?</label>
            <input {...fields.canphone.input} type="checkbox"/>
        </div>
        {fields.canphone.input.value &&
            <div>
                <label>Numer telefonu</label>
                <input {...fields.phoneNumber.input} type="text"/>
                {fields.phoneNumber.meta.touched && fields.phoneNumber.meta.error &&
                <strong style={style}>{fields.phoneNumber.meta.error}</strong>}
            </div>
        }
    </div>
);

const InputField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>
            {label}
        </label>
        <input {...input} placeholder={label} type={type}/>
        {touched && error && <strong style={style}>{error}</strong>}
    </div>
);

const TextField = ({input, label, type, meta: {touched, error}}) => (
    <div>
        <label>
            {label}
        </label>
        <textarea {...input} placeholder={label}/>
        {touched && error && <strong style={style}>{error}</strong>}
    </div>
);

const NewContactForm = props => {
    const {error, handleSubmit, pristine, reset, submitting} = props;
    return (
        <form noValidate onSubmit={handleSubmit}>
            <Field
                name="yourname"
                type="text"
                component={InputField}
                label="Your name"
            />
            <Field
                name="email"
                type="email"
                component={InputField}
                label="Email"
            />
            <Field
                name="question"
                component={TextField}
                label="Question"
            />
            <Fields names={[ 'canphone', 'phoneNumber']}
                component={InputFields} />
            {error && <strong style={style}>{error}</strong>}
            <div>
                <button type="submit">Submit</button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    );
}

export default reduxForm({
    form: 'contactForm'
})(NewContactForm);