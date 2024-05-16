import React, { Component } from 'react';

interface MyComponentProps {
  data: string;
}

export default class E5 extends Component<MyComponentProps> {
  render() {
    const { data } = this.props;
    return (
      <div>
        <p>Status: "{data}"</p>
      </div>
    );
  }
}