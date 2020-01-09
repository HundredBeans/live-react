import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from '../pages/home';
import Movie from '../pages/movie';
import LogIn from '../pages/login';
import Profile from '../pages/profile';

const MainRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/login" component={LogIn} />
                <Route exact path="/profile" component={Profile} />
                <Route path="/:kategori" component={Movie} />
                {/* <Route exact path="/romance" component={Movie} /> */}
                {/* <Route exact path="/profile" component={} />
                <Route exact path="/login" component={} />
                <Route component={NotFound} /> */}
            </Switch>
        </BrowserRouter>
    )
}
export default MainRoute;