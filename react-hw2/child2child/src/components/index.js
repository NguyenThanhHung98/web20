import React from 'react';
import './index.css'

class Child_1 extends React.Component {
  constructor(){ 
    super();
    this.state ={
      text:''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event){
    this.setState({
      text : event.target.value
    })
  }
  render(){
    return(
      <div>
        <input onChange={this.handleInputChange}/>
        <button onClick={() => this.props.onSubmit(this.state.text)}>
          Submit & Change 
        </button>
      </div>
    );
  }
}

class Child_2 extends React.Component{
  render(){
    return(
      <div>
        <p className={`text ${this.props.color}`}>{this.props.Text}</p>
      </div>
      
    );
  }
}

class Child2Child extends React.Component{
  constructor(){
    super();
    this.state = {
      text:'',
      color:''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(newText){
    this.setState({
      text:newText,
      color:'green'
    })
  }
  render(){
    return(
      <div>
        <Child_1 onSubmit={this.handleSubmit}/>
        <Child_2 Text={this.state.text}/>
        <Child_2 color={this.state.color} Text={this.state.text}/>
      </div>
    );
  }
}

export default Child2Child;




