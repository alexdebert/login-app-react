import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../home/home';
import Login from '../login/login';
import SearchHotel from '../searchHotel/searchHotel';

import './app.scss';

const App = () => (
    <main id='main-container'>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/search-hotel" component={SearchHotel} />
    </main>
);

export default App;