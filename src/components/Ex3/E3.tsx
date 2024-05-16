import React, { Component } from 'react'

interface State{
    value: string
}
export default class E3 extends Component {
    public state: State;
    constructor(props: State) {
        super(props);
        this.state = {
            value: 'RikkeiAcademy'
        }
    }
    handleChange = () =>{
        this.setState({
          value: 'Rikkei Soft'
        })
    }
  render() {
    return (
      <>
        <p>{this.state.value}</p>
        <button onClick={this.handleChange}>Click</button>
      </>
    )
  }
}
