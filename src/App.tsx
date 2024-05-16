import React, { Component } from 'react'
import E1 from './components/Ex1/E1'
import E2 from './components/Ex2/E2';
import E3 from './components/Ex3/E3';
import Ex4 from './components/Ex4/Ex4';
import E5 from './components/Ex5/E5';
import E6 from './components/Ex6/E6';
import E7 from './components/Ex7/E7';
import E8 from './components/Ex8/E8';
import Clock from './components/Ex9/Clock';
import Counter from './components/Ex10/Counter';

interface Ex5{
  newData: string,
  data: string,
  isClocks: boolean
}
export default class App extends Component<{}, Ex5>{
  state: Ex5;
  constructor(props: {}) {
    super(props);
    this.state = {
      newData: 'Open the form',
      data: "Interface Rendering",
      isClocks: true
    }
  }
  updateData = () => {
    this.setState({newData: "Close the form"});
  }
  banRender = () =>{
    this.setState({data: "Interface New Redering"})
  }
  isClock = () =>{
    this.setState({isClocks: !this.state.isClocks})
  }
  render() {
    return (
      <>
        <h1>Bài 1</h1>
        <E1></E1>
        <h1>Bài 2</h1>
        <E2></E2>
        <h1>Bài 3</h1>
        <E3></E3>
        <h1>Bài 4</h1>
        <Ex4></Ex4>
        <h1>Bài 5</h1>
        <div>
          <E5 data={this.state.newData} />
          <button onClick={this.updateData}>Update Data</button>
        </div>
        <h1>Bài 6</h1>
        <div>
          <E6 data={this.state.data}></E6>
          <button onClick={this.banRender}>Ban Render</button>
        </div>
        <h1>Bài 7</h1>
        <E7></E7>
        <h1>Bài 8</h1>
        <E8></E8>
        <h1>Bài 9</h1>
        {this.state.isClocks? <Clock></Clock> : ''}
        <button onClick={this.isClock}>Is clock</button>
        <h1>Bài 10</h1>
        <Counter></Counter>
      </>
    )
  }
}
