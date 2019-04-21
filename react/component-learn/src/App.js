import React, { Component } from 'react';
import './App.css';
import Button from './Button';
import './button.css'

class App extends Component {
  constructor(props){
    super(props);
    this.cong = this.cong.bind(this);
    this.tru = this.tru.bind(this);
    this.state ={
      num:10
    };
  }

  cong(){
    this.setState({
      num : this.state.num + 1
    })
  }

  tru(){
    this.setState({
      num : this.state.num - 1 
    })
  }
  
  render() {
    const num = this.state.num;
    // console.log(count)
    return (
      <div>
        <button onClick={this.cong}><Button text="+" color="green" /></button>
        <p className="number">{num}</p>
        <button onClick={this.tru}><Button text="-" color="red" /></button>
      </div>
    );
  }
}

export default App;
