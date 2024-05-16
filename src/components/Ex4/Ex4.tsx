import React, { Component } from 'react'

interface State{
    value: string
}
export default class Ex4 extends Component {
    public state: State;
    constructor(props: State) {
        super(props);
        this.state = {
          value: "Học code để đi làm"
        }
    }
    handleChange = () =>{
        this.setState({
          value: "Học code để đi chơi"
        })
        console.log(this.state.value);
        
    }
    shouldComponentUpdate(): boolean {
        return false
    }
  render() {
    return (
      <>
        <p>{this.state.value}</p>
        <button onClick={this.handleChange}>change Slogan</button>
      </>
    )
  }
}
