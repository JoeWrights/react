import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class MyTitle extends Component {
  render() {
    return (
      <div>{this.props.title}</div>
    );
  }
}

MyTitle.propTypes = {
  title: PropTypes.string
}

class App extends Component {
  render() {
    const data = '123';
    return (
      <div className="App">
        <MyTitle title={data} />
      </div>
    );
  }
}

export default App;
