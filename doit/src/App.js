import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const todoList = [
  { id: 1, text: 'Buy a bouncy castle', done: false },
  { id: 2, text: 'bounce on the bouncy castle', done: false }
]

const ListItem = props => (<div className="ListItem">{props.text}</div>)

class List extends Component {
  render() {
    return (
      <div className="List">
        {todoList.map(x => (
          <ListItem text={x.text} key={x.id} />
        ))}
      </div>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Doit</h2>
          <List />
        </div>
      </div>
    );
  }
}

export default App;
