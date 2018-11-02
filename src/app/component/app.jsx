import React from 'react';
import ReactDOM from 'react-dom';

import About from './about/about';
import User from './user/user';
import Home from './home/home';
import Menu from './menu/menu';
import AppRouting from './app-routing';

import './app.css';

class App extends React.Component {
    render() {
        return(
            <div className='container'>
                <Menu className='menu'/>
                <div className='content'>
                    <AppRouting />
                </div>
            </div>
        );
    };
};

export default App;