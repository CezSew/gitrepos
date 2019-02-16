import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <input id="user-input" className="form-control" type="text" name="user" placeholder="User" autoComplete="off"/> 
        );
    }
}


export default Input;