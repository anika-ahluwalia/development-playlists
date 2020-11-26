import './App.css';
import React from 'react';
import PlaylistCard from './PlaylistCard';
import Row from 'react-bootstrap/Row'

export default class Playlist extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="playlist">
            <div className="song-title" style={{fontSize: "25px"}}>Playlist</div>
            <Row style={{justifyContent:"center"}}>{this.props.list.map(item => <PlaylistCard song={item} removeFromPlaylist={this.props.removeFromPlaylist}/>)}</Row>
            <div className="total-time">Total Time: {this.props.totalTime} minutes</div>
        </div>
    );
  }
}