import React from 'react';
//react 模版，react-dom
import ReactDOM from 'react-dom';
import './index.css';  //webpack引入css
import App from './App';
// import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));  //将组件挂载到根节点上
// registerServiceWorker();
