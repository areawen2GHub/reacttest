/**
 * Clock
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom';

function Welcome(props) {
    return <h1>hello, {props.name}</h1>;
}

class Clock extends Component{
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    componentDidMount(){
        //  装载定时器
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount(){
        //  卸载定时器
        clearInterval(this.timerID);
    }

    render(){
        return (
            <div>
                <Welcome name="world" />
                <h2>It is {this.state.date.toString('yyyy-MM-dd HH:mm:ss')}</h2>
            </div>
        );
    }
}

export default Clock;