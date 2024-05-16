import React, { Component } from 'react'

interface Props{
    userName: string
}
export default class
 extends Component {
    public state: Props;
    constructor(props: any) {
        super(props);
        this.state = {
            userName: ""
        }
    }
    componentDidMount(): void {
        this.setState({
            userName: "Hảo"
        })
    }
  render() {
    return (
      <>
        <div>{this.state.userName}</div>
      </>
    )
  }
}
