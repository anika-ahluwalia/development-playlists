import './App.css';
import React from 'react';
import PlaylistCard from './PlaylistCard';
import Row from 'react-bootstrap/Row';
import TextField from '@material-ui/core/TextField';

export default class Playlist extends React.Component {

  constructor(props){
    super(props);
  }

  getTotalTime = () => {
    var index = 0;
    var time = 0;
    while (index < this.props.list.length){
      time += this.props.list[index].time;
      index += 1;
    }
    return time;
  }

  getTimeLabel = () => {
    var time = this.getTotalTime();
    var hour = 0;
    var min = 0;
    while (time >= 3600){
      time += -3600;
      hour += 1;
    }
    while (time >= 60){
      time += -60;
      min += 1;
    }
    if (time < 10){
      time = "0" + String(time);
    }
    if (hour > 0){
      return String(hour) + " hour and " + String(min) + ":" + String(time) + " minutes"
    }
    return String(min) + ":" + String(time) + " minutes"
  }

  render(){
    return (
        <div className="playlist">
            <div className="song-title">
            <TextField  className="song-title" inputProps={{ style: {fontSize: "25px"} }} id="outlined-basic" label="Playlist Title" variant="outlined" />
            </div>
            <Row style={{justifyContent:"center"}}>{this.props.list.map(item => <PlaylistCard song={item} removeFromPlaylist={this.props.removeFromPlaylist}/>)}</Row>
            <div className="total-time" style={{marginTop: "10px"}}>Total Time: {this.getTimeLabel()}</div>
        </div>
    );
  }
}