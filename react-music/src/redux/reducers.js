//reducers是一个返回状态的函数，把上一个版本的state丢掉，生成新的state
//state 和 mutations的结合
//由于一个reducer不可能把所有的状态都管理
//项目越大，有很多reducers，最后把这些reducers交给redux里的combineReducers，再向外输出
import {
  combineReducers
} from 'redux';
import * as ActionTypes from './actionTypes';

const initicalState = {
  song: {},
  songs: [],
  showStatus: false
}

function song(song = initicalState.song, action) {
  switch (action.type) {
    case ActionTypes.CHANGE_SONG:
      return action.song;
    default:
      return song;
  }
}

function songs(song = initicalState.songs, action) {
  switch (action.type) {
    case ActionTypes.SET_SONGS:
      return action.songs;
    case ActionTypes.REMOVE_SONG_FORM_LIST:
      return songs.filter(song => {
        return song.id !==action.id;
      })
    default:
      return songs;
  }
}

function showStatus(showStatus = initicalState.showStatus, action) {
  //action有外界的actions触发
  switch (action.type) {
    case ActionTypes.SHOW_PLAYER:
      return action.showStatus
    default:
      return showStatus
  }
}

const reducer = combineReducers({
  song,
  songs,
  showStatus
});
export default reducer;