import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {devToolsEnhancer} from "redux-devtools-extension";

import {ContactForm} from './components/ContactForm';
import {reducer} from './store';


const WithRedux = () => (
    <Provider store={createStore(reducer, devToolsEnhancer())}>
        <ContactForm/>
    </Provider>
);

export {WithRedux};