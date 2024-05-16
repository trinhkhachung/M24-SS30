import React, { Component } from 'react'

interface MyComponentState {
    inputValue: string;
  }
export default class E8 extends Component<{}, MyComponentState> {
    constructor(props: {}) {
        super(props);
        this.state = {
          inputValue: '',
        };
      }
      handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
          inputValue: event.target.value,
        });
      };
      componentDidMount() {
        document.title = this.state.inputValue;
      }
  render() {
    return (
        <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
        />
      </div>
    )
  }
}
