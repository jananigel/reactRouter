import React from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';

import About from './about/about';
import User from './user/user';
import Home from './home/home';
import Menu from './menu/menu';

class AppRouting extends React.Component { 
    render() {
        return(
            <>
                <Route exact path="/" component={ Home } />
                <Route exact path="/about" component={ About }/>
                <Route exact path="/user/:userId" component={ User } />
            </>
        );
    };
};

export default AppRouting;