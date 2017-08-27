import React from 'react';
import { Route } from 'react-router-dom';
import Login from '../login/login';

import './app.scss';

const App = () => (
    <main id='main-container'>
        <Route exact path="/" component={Login} />
    </main>
);

export default App;