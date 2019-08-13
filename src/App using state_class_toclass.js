import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import { tsPropertySignature } from '@babel/types';

class Timer extends Component {

  constructor(props){
      super(props)
      this.state ={
        time:props.start
      }
  }

 increases(){
   //Update date time
   this.setState((state, props) => ({
        time: parseInt(state.time)+1
   }))
 }
  //LifeCycle
  componentDidMount(){
    this.addInterval =  setInterval(()=>this.increases(),1000)
  }
  componentWillMount(){
    clearInterval(this.addInterval)
  }
  render() {
    return (
      <div>{this.state.time} Second</div>
    )
  }
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Timer start="0"/>
          <Timer start="30"/>
        </header>
      </div>
    );
  }
}
  

export default App;
