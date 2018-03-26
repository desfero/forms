import React from 'react'
import {Field} from 'redux-form'
import './styles.css'

const renderField = ({
                         input,
                         label,
                         type,
                         meta: {touched, error, warning}
                     }) => {
    const InputElement = type === 'textarea' ? 'textarea' : 'input';
    return (
        <div className="field">
            <label>{label}</label>
            <div>
                <InputElement {...input} placeholder={label} type={type}/>
                {touched &&
                ((error && <span className={"error"}>{error}</span>) ||
                    (warning && <span className={"warning"}>{warning}</span>))}
            </div>
        </div>)
};

export const DecoratedField = (props) => {
    return (
        <Field component={renderField} {...props} />
    )
};