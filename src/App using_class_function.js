import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import { tsPropertySignature } from '@babel/types';

function Greeting(){
  return <h1>Hallo semua</h1>
}
function Greeting2(props){
  return <h4>Hallo {props.nama}, selamat datang</h4>
}
function Usia(props2){
    return <span> usia : {props2.age}</span>
}

function Greeting3(props){
  return <h4>- {props.name} <Usia age="40" /></h4>
}

class App extends Component {
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {/* <p>
            Halo Oncom!!!, Edit <code>src/App.js</code> and save to reload.
          </p> */}
          <p>
            <Greeting2 nama="Ryan Muktiadhi"/></p>
            <p><Greeting3 name="Ryan Muktiadhi" age="40" /></p>
        </header>
      </div>
    );
  }
}
  

export default App;
