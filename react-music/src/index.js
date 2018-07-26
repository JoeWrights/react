import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// redux state, actions, 没有直接的map, 提出将组件分成两部分，原来的UI组件部分，新增一个
//一个container容器
//redux 将数据给container,container再将数据给component
// import App from '@/components/App';
import App from '@/components/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
