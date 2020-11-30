import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';

export default class SongCard extends React.Component {
    
    addToPlaylist = () => {
      this.props.addToPlaylist(this.props.song);
    }

    getTimeLabel = () => {
      var time = this.props.song.time;
      var min = 0;
      while (time >= 60){
        time += -60;
        min += 1;
      }
      if (time < 10){
        time = "0" + String(time);
      }
      return String(min) + ":" + String(time) + " min"
    }
  
    render(){

      var items = []; 
      var index = 0;

      while (index < this.props.song.rating) {
        index += 1;
        items.push(<Icon className="rating-star">star</Icon>)
      }

      return (
        <div className="song-card">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <div className="song-title">{this.props.song.title}</div>
            <div className="song-artist">{this.props.song.artist}</div>
            <div className="song-props">
              <Chip className="song-time" label={this.getTimeLabel()} />
              {items}
            </div>
            <div className="song-img"><img src={this.props.song.img} alt={this.props.song.title}/></div>
            <div className="song-props">
              <Chip className="song-time" label={this.props.song.genre} />
              <Chip className="song-time" label={this.props.song.mood} />
            </div>
            <div className="add-to-playlist"><Button variant="secondary" className="add-button" 
              style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black" }}
              onClick={this.addToPlaylist}>Add to Playlist</Button></div>
        </div>
      );
    }
  }
  