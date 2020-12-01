import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';

export default class PlaylistCard extends React.Component {
    
    // uses the passed in method to remove a song from the playlist
    removeFromPlaylist = () => {
      this.props.removeFromPlaylist(this.props.song);
    }

    // returns the time label for the song
    getTimeLabel = () => {
      var time = this.props.song.time;
      var min = 0;
      // calculates the number of minutes
      while (time >= 60){
        time += -60;
        min += 1;
      }
      if (time < 10){
        time = "0" + String(time);
      }
      // returns the string indicating minutes and seconds
      return String(min) + ":" + String(time) + " min"
    }
  
    // renders the card for each song in the playlist
    render(){

      var stars = []; 
      var index = 0;
      // renders a component for each song in the rating
      while (index < this.props.song.rating) {
        index += 1;
        stars.push(<Icon className="rating-star">star</Icon>)
      }

      return (
        <div className="playlist-card">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          {/* first displays the song image */}
          <div className="song-img">
            <img className="playlist-album" src={this.props.song.img} alt={this.props.song.title}/>
          </div>
          {/* then displayes the information (title, name, rating, tags, etc) */}
          <div className="song-info">
            <div className="song-id-container"> 
              <div className="song-title-playlist">{this.props.song.title}</div>
              <div className="song-artist-playlist">{this.props.song.artist}</div>
            </div>
            <div className="song-props">
                <Chip className="song-time" label={this.getTimeLabel()} />
                {stars}
              </div>
              <div className="song-props">
                <Chip className="song-time" label={this.props.song.genre} />
                <Chip className="song-time" label={this.props.song.mood} />
              </div>
          </div>
            {/* finally has the button to remove the song from the playlist */}
            <div className="remove-from-playlist">
              <Button variant="danger" 
              onClick={this.removeFromPlaylist}>×</Button></div>
        </div>
      );
    }
  }
  