// store: 单一状态树，树上的每一个节点都是一个状态
import { createStore } from 'redux';
import reducer from './reducers';


const store = createStore(reducer);

export default store;