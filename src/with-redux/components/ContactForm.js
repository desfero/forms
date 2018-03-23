import React, {Component} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {reset, update} from "../actions";
import NewContactForm from './NewContactForm';
import { SubmissionError } from 'redux-form';
import {validators} from "../validators";

class ContactFormBase extends Component {
    state = {
        validations: []
    };

    registerValidation = isValidFunc => {
        this.setState(s => ({validations: s.validations.concat([isValidFunc])}));
        return () => this.removeValidation(isValidFunc);
    };

    removeValidation = ref => {
        this.setState(s => ({validations: s.validations.filter(f => f === ref)}));
    };

    isFormValid = showErrors => {
        return this.state.validations.reduce((p, c) => c(showErrors) && p, true);
    };

    submit = values => {
        if(!values.yourname || values.yourname.length === 0) {
            throw new SubmissionError({
                yourname: 'This Field is required',
                _error:  'Sending contact request filed'
            });
        } else if(!values.email || values.email.length === 0) {
            throw new SubmissionError({
                email: 'This Field is required',
                _error:  'Sending contact request filed'
            });
        } else if (!!values.email && !validators.isEmailValid(values.email)) {
            throw new SubmissionError({
                email: 'Email address is invalid',
                _error:  'Sending contact request filed'
            });
        } else if(!values.question || values.question.length === 0) {
            throw new SubmissionError({
                question: 'This Field is required',
                _error:  'Sending contact request filed'
            });
        } else if(!!values.canphone && (!values.phoneNumber || values.phoneNumber.length === 0) ) {
            throw new SubmissionError({
                phoneNumber: 'This Field is required',
                _error:  'Sending contact request filed'
            });
        } else if (!!values.canphone && !validators.phone(values.phoneNumber)){
            throw new SubmissionError({
                phoneNumber: 'Phone number is incorrect',
                _error:  'Sending contact request filed'
            });
        } else {
            alert("Send Form");
        }
    };

    render() {
        return (
            <div>
                <NewContactForm onSubmit={this.submit}/>
            </div>
        )
    }
}

export const ContactForm = connect(
    state => ({contactForm: state.contactForm}),
    dispatch => bindActionCreators({update, reset}, dispatch)
)(ContactFormBase);
