import React, { Component } from 'react';
import MiniPlayer from '../components/play/MiniPlayer';
import { connect } from 'react-redux';
import { changeSong } from '../redux/anctions';


const mapStateToProps = (state) => ({  //想要多少个状态，就在这里拿
  currentSong: state.song,
  playSongs: state.songs
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSong: (song) => {  //这个函数在组件里承载一个方法(this.props.)
    dispatch(changeSong(song));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MiniPlayer);