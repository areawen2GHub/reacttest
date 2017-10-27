/**
 * Main
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>welcome to {props.name} world!</h1>;
}

class Main extends Component{
    constructor(props) {
        super(props);
    }

    render(){
        return (
            <div>
                <Welcome name="React" />
            </div>
        );
    }
}

export default Main;