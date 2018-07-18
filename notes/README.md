# react 学习笔记

## react的安装

```
yarn global add  create-react-app 
```
或

```
npm install  -g  create-react-app
```

## 初始化一个项目

```
create-react-app my-react-project
```
## 项目运行
```
cd my-react-project
```

```
npm run start
```
## 项目文件分析

`index.js`
```
import React from 'react';
//react 模版，react-dom
import ReactDOM from 'react-dom';
import './index.css';  //webpack引入css
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  //将组件挂载到根节点上
// registerServiceWorker();
```

`app.js`
```
import React, { Component } from 'react';
import Notes from './components/Notes';
import 'semantic-ui-css/semantic.min.css'
import './App.css';   //style

//.vue 三部分 template js style
//react .js 组件类 继承 template在哪里？ jsx语法 render
class App extends Component {
  render() {
    return (

      <Notes />
    );
  }
}

export default App;
```
## 一些常用的npm包
```
yarn add lodash lokijs moment
```
- lodash
- lokijs
- moment