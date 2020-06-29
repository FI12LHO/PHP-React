import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

// Pages
import Home from './page/home/home';
import Register from './page/register/register';
import Search from './page/search/search';
import Login from './page/login/login';
import Profile from './page/profile/profile';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/register' component={Register} />
                <Route path='/search' component={Search} />
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile} />
            </Switch>
        </BrowserRouter>
    );
}