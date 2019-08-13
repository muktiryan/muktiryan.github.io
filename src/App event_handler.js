import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
// import { tsPropertySignature } from '@babel/types';
class Toogle extends Component {
    constructor(props){
        super(props)
        this.state = {
          toggleStatus: true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(){
      this.setState(state => ({
          toggleStatus:!state.toggleStatus
      }))
    }
    render(){
      return (
        <button onClick={this.handleClick}>
            {this.state.toggleStatus ? 'ON': 'OFF'}
            <p>Lampu {this.state.toggleStatus? 'Hidup': 'Mati'} </p>
        </button>
      )
    }

}

class App extends Component {
  render(){
    return (
      <div className="App">
        <Toogle/>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
        </header>
      </div>
    );
  }
}
  

export default App;
