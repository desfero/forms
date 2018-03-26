import React from 'react';
import {Provider} from 'react-redux';
import {ContactPage} from './components/ContactPage';
import {store} from './store';


const WithReduxForm = () => (
    <Provider store={store}>
        <ContactPage/>
    </Provider>
);

export {WithReduxForm};