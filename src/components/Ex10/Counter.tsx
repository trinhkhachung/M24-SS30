import React, { Component } from 'react'

interface CounterState{
  count: number
}
export default class Counter extends Component<{}, CounterState>{
  interval: any;
  constructor(props: {}) {
    super(props);
    this.state = ({
      count: 0
    })
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        count: (prevState.count + .5) % 11
      }));
    }, 1000);
  }
  componentWillMount(): void {
      clearInterval(this.interval);
  }
  render() {
    return (
      <>
        <h3>{this.state.count}</h3>
      </>
    )
  }
}
