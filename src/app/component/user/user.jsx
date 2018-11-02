import React from 'react';
import ReactDOM from 'react-dom';

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

export default User;