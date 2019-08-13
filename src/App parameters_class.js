import React, {Component} from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import List from './List'
import './App.css';
// import { tsPropertySignature } from '@babel/types';

function Home(){
  return <h1>Home Page</h1>
}
function Users(){
  return <h1>Users Page</h1>
}
class ListUsers extends Component {
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
      return(
        <div>
          <h3>Users List</h3>
          {items.map((item, index)=> 
            // <li key={index}>{item.name} ({item.email})</li>
            <li key={index}><Link to={'user/'+item.id}>{item.name} from {item.company.name}</Link></li>
           
            )}
        </div>
      );
  }
}
function DetailPosts({match}){

  const iduser = match.params.id;
  console.log('#### '+iduser);


  return(
    <h1>Post from id {match.params.id}</h1>
  );
}

// componentDidMount() {
//   fetch("http://jsonplaceholder.typicode.com/users").then(response => response.json()).then(data => this.setState({items: data}))
// }

class DetailPostClass extends Component {
  constructor(props){
    super(props)
    this.state ={
      items: [],
      id:null
    }
  }
  componentDidMount() {
    const {id} = this.props.match.params
    this.setState(() => ({id}))
    fetch('http://jsonplaceholder.typicode.com/posts?userId=${id}').then(response => response.json()).then(data => this.setState({items: data}))
  }
  render(){
    const {items} = this.state
      return(
        <div>
          <h1>List Posts</h1>
          <p>Id yang masuk {this.state.id}</p>
        </div>
      );
  }
}

function PageNoMatch(){
  return <h1>404, Page Not found!</h1>
}

class App extends Component {
  constructor(props){
      super(props)
      this.state = {
        items: [],
        isLoading:true
      }
  }
  render(){
    const {items, isLoading } = this.state
    return (
        <BrowserRouter>
          <div>
              <nav>
                <ul>
                  <li><Link to='/'>Home</Link></li>
                  <li><Link to='/users'>User</Link></li>
                </ul>
              </nav>
              <main>
                <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/users' exact component={ListUsers} />
                <Route path='/user/:id' exact component={DetailPostClass} />
                <Route component={PageNoMatch} />
                </Switch>
              </main>
          </div>
        </BrowserRouter>
      
    );
  }
}
  

export default App;
