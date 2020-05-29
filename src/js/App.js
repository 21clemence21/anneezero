import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../component/header';
import Home from '../pages/home';
import Login from '../pages/login';
import Register from '../pages/register';

const App = () => {
    return(
        <Router>
            <Header/>
            <Switch>
                <Route exact path='/'>
                    <Home/>
                </Route>
                <Route path='/login'>
                    <Login/>
                </Route>
                <Route path='/register'>
                    <Register/>
                </Route>
            </Switch>
        </Router>
    )
}


export default App;