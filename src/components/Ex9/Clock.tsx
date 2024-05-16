import React, { Component } from 'react';

interface ClockState {
    time: Date;
}

class Clock extends Component<{}, ClockState> {
    private timerID: number | undefined;

    constructor(props: {}) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount = () => {
        this.timerID = window.setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount = () => {
        if (this.timerID) {
            clearInterval(this.timerID);
        }
    }

    tick = () => {
        this.setState({
            time: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Current Time</h1>
                <h2>{this.state.time.toLocaleTimeString()}</h2>
            </div>
        );
    }
}

export default Clock;
