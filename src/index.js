import './styles.css';

import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Controlled} from './controlled';
import {Uncontrolled} from './uncontrolled';
import {WithRedux} from './with-redux';
import {WithReduxForm} from "./with-redux-form";

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route
                path="/"
                exact
                render={() => (
                    <ul>
                        <li>
                            Controlled:
                            <ul>
                                <li>
                                    <Link to="controlled/textarea">Textarea</Link>
                                </li>
                                <li>
                                    <Link to="controlled/checkbox">Checkbox</Link>
                                </li>
                                <li>
                                    <Link to="controlled/select">Select</Link>
                                </li>
                                <li>
                                    <Link to="controlled/text">Text</Link>
                                </li>
                                <li>
                                    <Link to="controlled/multiselect">MultiSelect</Link>
                                </li>

                            </ul>
                        </li>
                        <li>
                            Uncontrolled:
                            <ul>
                                <li>
                                    <Link to="uncontrolled/text">Text</Link>
                                </li>
                                <li>
                                    <Link to="uncontrolled/file">File</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link to="with-redux/contact-form">With redux</Link>
                        </li>
                        <li>
                            <Link to="with-redux-form/contact-page">With Redux Form</Link>
                        </li>
                    </ul>
                )}
            />
            <Route path="/controlled" component={Controlled}/>
            <Route path="/uncontrolled" component={Uncontrolled}/>
            <Route path="/with-redux" component={WithRedux}/>
            <Route path="/with-redux-form" component={WithReduxForm}/>
        </Switch>
    </BrowserRouter>
);

render(<App/>, document.getElementById('root'));
