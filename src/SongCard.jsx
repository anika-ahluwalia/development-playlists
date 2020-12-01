import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';

export default class SongCard extends React.Component {
    
    // method to add a song to the playlist (passed in from props)
    addToPlaylist = () => {
      this.props.addToPlaylist(this.props.song);
    }

    // method that calculates the song time and returns the string indicating that time
    getTimeLabel = () => {
      var time = this.props.song.time;
      var min = 0;
      // loops through for every minute
      while (time >= 60){
        time += -60;
        min += 1;
      }
      if (time < 10){
        time = "0" + String(time);
      }
      // returns the min and seconds in a string
      return String(min) + ":" + String(time) + " min"
    }
  
    
    // rendering each song card
    render(){

      // looping through and creating a component for all of the rating stars
      var stars = []; 
      var index = 0;
      while (index < this.props.song.rating) {
        index += 1;
        stars.push(<Icon className="rating-star">star</Icon>)
      }

      return (
        <div className="song-card">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            {/* rendering all the components of the song (from the song info passed in as props) */}
            <div className="song-title">{this.props.song.title}</div>
            <div className="song-artist">{this.props.song.artist}</div>
            <div className="song-props">
              <Chip className="song-time" label={this.getTimeLabel()} />
              {stars}
            </div>
            <div className="song-img"><img src={this.props.song.img} alt={this.props.song.title}/></div>
            <div className="song-props">
              <Chip className="song-time" label={this.props.song.genre} />
              <Chip className="song-time" label={this.props.song.mood} />
            </div>
            {/* button to add the song to the playlist calling on the method passed in as props */}
            <div className="add-to-playlist"><Button variant="success" className="add-button" 
              onClick={this.addToPlaylist}>Add to Playlist</Button></div>
        </div>
      );
    }
  }
  