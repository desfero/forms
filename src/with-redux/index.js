import React from 'react';
import {Provider} from 'react-redux';
import {ContactForm} from './components/ContactForm';
import {store} from './store';


const WithRedux = () => (
    <Provider store={store}>
       <ContactForm/>
    </Provider>
);

export {WithRedux};