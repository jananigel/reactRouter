import React from 'react';
import ReactDOM from 'react-dom';

import { Route, Link } from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div>
                <h1>Home</h1>
            </div>
        );
    };
};

class About extends React.Component {
    render() {
        return(
            <div>
                <h1>About</h1>
            </div>
        );
    };
};

class User extends React.Component {
    render() {
        console.log('user = ' + this.props.match.params.userId);
        // console.log('user children = ' + Object.keys(this.props.history));
        return(
            <div>
                <h1>User: {this.props.match.params.userId}</h1>
            </div>
        );
    };
};

class Menu extends React.Component {
    render() {
        return(
            <>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/user/1">User</Link></li>
                    <li><Link to="/user/2">User2</Link></li>
                </ul>
                {this.props.children}
            </>
        );
    };
};

class Routing extends React.Component { 
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

class App extends React.Component {
    render() {
        return(
            <>
                <Menu />
                <Routing />
            </>
        );
    };
};

export default App;