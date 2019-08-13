import React, {Component} from 'react';
import List from './List'
import './App.css';
// import { tsPropertySignature } from '@babel/types';





class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        items: []
      }
  }
  componentDidMount() {
    fetch("http://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => this.setState({items: data}))
  }

  

  render(){
    const {items} = this.state
    return (
      <div>
        <ol>
          {items.map((item, index)=> 
            <li key={index}>{item.name} ({item.email})</li>)}

        </ol>

      </div>
    );
  }
}
  

export default App;
