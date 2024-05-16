import React, { Component } from 'react'

export default class E7 extends Component {
    componentDidMount(): void {
        document.title = 'Did mount'
    }
    componentWillMount(): void {
        document.title = 'Will mount'
    }
  render() {
    document.title = "Render"
    return (
      <>
        
      </>
    )
  }
}
