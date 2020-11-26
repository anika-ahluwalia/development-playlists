import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';

export default class SongCard extends React.Component {

    constructor(props){
      super(props);
    }
    
    addToPlaylist = () => {
      this.props.addToPlaylist(this.props.song);
    }
  
    render(){

      var items = []; 
      var index = 0;

      while (index < this.props.song.rating) {
        index += 1;
        items.push(<Icon style={{color: "#b4dab1", fontSize: "22px"}}>star</Icon>)
      }

      return (
        <div className="song-card">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <div className="song-title">{this.props.song.title}</div>
            <div className="song-artist">{this.props.song.artist}</div>
            <div className="song-props" style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
              <Chip className="song-time" label={this.props.song.time + " min"} />
              {items}
            </div>
            <div className="song-img"><img src={this.props.song.img} alt={this.props.song.title}/></div>
            <div className="song-props" style={{display:"flex", justifyContent: "center"}}>
              <Chip className="song-time" label={this.props.song.genre} />
              <Chip className="song-time" label={this.props.song.mood} />
            </div>
            <div className="add-to-playlist" style={{paddingBottom: "8px"}}><Button variant="secondary" style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black"}}
              onClick={this.addToPlaylist}>Add to Playlist</Button></div>
        </div>
      );
    }
  }
  