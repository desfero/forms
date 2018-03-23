import {reducer as reduxFormReducer} from 'redux-form';
import {combineReducers, createStore} from 'redux';

// const initialState = {
//     contactForm: {},
// };

// export const store = (state = initialState, action) => {
//     switch (action.type) {
//
//         case FORM_UPDATE_VALUE:
//             return {
//                 ...state,
//                 contactForm: {
//                     ...state.contactForm,
//                     [action.payload.name]: action.payload.value,
//                 }
//             };
//
//         case FORM_RESET:
//             return initialState;
//
//         default:
//             return state;
//     }
// };

const reducer = combineReducers({
    form: reduxFormReducer
});

export const store = (window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore)(reducer);


