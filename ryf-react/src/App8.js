import React, { Component } from 'react';
//对react ui阿里的antd 部分引用
import {Table, Pagination, Input, Row, Button, Modal, Form } from 'antd';
import 'antd/dist/antd.css';
const { Search } = Input;
const FormItem = Form.Item;
const { confirm } = Modal;
import './App.css';

class UserGist extends Component {
  state = {
    username: '',
    lastGistUrl: ''
  }
  render() {
    return (
      <div>
        {this.state.username}'s last gist is
        <a href={this.state.lastGistUrl}>here</a>
      </div>
    );
  }
  
  componentDidMount() {
    fetch(this.props.source).then(data => data.json())
    .then(data => {
      const lastGist = data[0];
      this.setState({
        username: lastGist.owner.login,
        lastGistUrl: lastGist.html_url
      });
    })
  }
  
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserGist source="http://api.github.com/users/octocat/gists"/>
      </div>
    );
  }
}

export default Form.create()(App);
