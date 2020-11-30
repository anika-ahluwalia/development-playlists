import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';

export default class PlaylistCard extends React.Component {
    
    removeFromPlaylist = () => {
      this.props.removeFromPlaylist(this.props.song);
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
        <div className="playlist-card">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <div className="song-img">
            <img className="playlist-album" src={this.props.song.img} alt={this.props.song.title}/>
          </div>
          <div className="song-info">
            <div className="song-id-container"> 
              <div className="song-title-playlist">{this.props.song.title}</div>
              <div className="song-artist-playlist">{this.props.song.artist}</div>
            </div>
            <div className="song-props">
                <Chip className="song-time" label={this.getTimeLabel()} />
                {items}
              </div>
              <div className="song-props">
                <Chip className="song-time" label={this.props.song.genre} />
                <Chip className="song-time" label={this.props.song.mood} />
              </div>
          </div>
            <div className="remove-from-playlist">
              <Button variant="secondary" style={{backgroundColor: "#ee8d8d", borderColor: "#ee8d8d", color: "black"}}
              onClick={this.removeFromPlaylist}>×</Button></div>
        </div>
      );
    }
  }
  