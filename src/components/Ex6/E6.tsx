import React, { Component } from 'react'

interface Props{
    data: string
}
export default class E6 extends Component<Props>{
  shouldComponentUpdate(): boolean {
      return false
  }
  render() {
    const {data} = this.props;
    return (
      <>
        <h3>Message: "{data}"</h3>
      </>
    )
  }
}
