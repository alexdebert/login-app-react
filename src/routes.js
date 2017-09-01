import React from 'react';  
import { Route, IndexRoute } from 'react-router';  
import App from './containers/app/app';  
import Home from './containers/home/home';
import Login from './containers/login/login';

export default (  
    <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/login" component={Login} />
    </Route>
);