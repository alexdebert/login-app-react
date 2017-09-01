import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';

import configureStore from './store';
import routes from './routes';

import {loadAirlines} from './actions/airlinesAction';


const store = configureStore();

store.dispatch(loadAirlines());

import './index.scss';

const target = document.querySelector('#root');

render(
    <Provider store={store}>
        <Router history={browserHistory} routes={routes} />
    </Provider>,
    target
);