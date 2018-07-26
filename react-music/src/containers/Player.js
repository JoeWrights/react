//设置containers的目的是让component只负责ui和MVVM

import { connect } from 'react-redux';
import Player from '../components/play/Player';
import { changeSong } from '../redux/anctions';


const mapStateToProps = (state) => ({
  currentSong: state.song,
  playSongs: state.songs
});

const mapDispatchToProps = (dispatch) => ({
  changeCurrentSong: (song) => {
    dispatch(changeSong(song));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Player);