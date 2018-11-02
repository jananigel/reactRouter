import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

import './menu.css';

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

export default Menu;