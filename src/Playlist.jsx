import './App.css';
import React from 'react';
import PlaylistCard from './PlaylistCard';
import Row from 'react-bootstrap/Row';
import TextField from '@material-ui/core/TextField';

export default class Playlist extends React.Component {

  // method that calculates the total time of the playlist
  getTotalTime = () => {
    var index = 0;
    var time = 0;
    // loops through all the songs in the playlist
    while (index < this.props.list.length){
      // adds their time to the total time
      time += this.props.list[index].time;
      index += 1;
    }
    return time;
  }

  // method that returns the string that shows the total time
  getTimeLabel = () => {
    var time = this.getTotalTime();
    var hour = 0;
    var min = 0;
    // subtracts hours if there are any
    while (time >= 3600){
      time += -3600;
      hour += 1;
    }
    // subtracts minutes if there are any
    while (time >= 60){
      time += -60;
      min += 1;
    }
    if (time < 10){
      time = "0" + String(time);
    }
    // returns the appropriate string
    if (hour > 0){
      return String(hour) + " hour and " + String(min) + ":" + String(time) + " minutes"
    }
    return String(min) + ":" + String(time) + " minutes"
  }

  // rendering the playlist overall
  render(){
    return (
        <div className="playlist">
            {/* component for the title of the playlist */}
            <div className="song-title">
            <TextField  className="song-title" inputProps={{ style: {fontSize: "25px"} }} 
              id="outlined-basic" label="Playlist Title" variant="outlined" />
            </div>
            {/* displaying the total time of the playlist */}
            <div className="total-time">Playlist Time: {this.getTimeLabel()}</div>
            {/* mapping all of the songs in the playlist as cards */}
            <Row style={{justifyContent:"center"}}>
              {this.props.list.map(item => <PlaylistCard song={item} removeFromPlaylist={this.props.removeFromPlaylist}/>)}
            </Row>
        </div>
    );
  }
}