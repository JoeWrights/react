import React, { Component } from 'react';
import './App.css';

class NodeList extends Component {
  render() {
    return (
      <ul>
        {this.props.children.map(((child, index) => <li key={index}>{child}</li>))}
      </ul>
    );
  }
} 

class App extends Component {
  render() {
    return (
      <div className="App">
        <NodeList>
          <span>hello</span>
          <span>world</span>
        </NodeList>
      </div>
    );
  }
}

export default App;
