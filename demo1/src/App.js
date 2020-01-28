import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Body from './components/Body';

class App extends Component{
  constructor(){
      super()
      this.state ={
        inputData: 'Vinay Kumar',
        msg: '',
        text: []
      }
  }

  onChng = (e) =>{
    this.setState({msg: e.target.value});
    console.log(this.state.msg)
  }


  render(){
    return (
      <div className="container">
        <Header/>
        <Body dd={this.state.inputData} onchange={this.onChng}/>
      </div>
    );
  }
}
export default App;
