import React from 'react';
import './index.css'

class Child extends React.Component{
  render(){
    return(
      <div>
        <p className={`text ${this.props.color}`}>Text</p>
      </div>
      
    );
  }
}

class Parent extends React.Component{
  constructor(){
    super();
    this.state ={
      color:''
    }
    this.colorChange = this.colorChange.bind(this);
  }
  colorChange(){
    this.setState({
      color:'green' 
    })
  }
  
  render(){
    return(
      <div>
        <button onClick={this.colorChange}>
        Change
        </button>
        <Child color={this.state.color}/>
      </div>
    );
  }
}

export default Parent;
