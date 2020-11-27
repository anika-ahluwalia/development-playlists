import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';

export default class PlaylistCard extends React.Component {

    constructor(props){
      super(props);
    }
    
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
        items.push(<Icon fontSize="small" style={{color: "#b4dab1", fontSize: "22px"}}>star</Icon>)
      }

      return (
        // <div className="playlist-card">
        //   <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        //     <div className="song-title">{this.props.song.title}</div>
        //     <div className="song-artist">{this.props.song.artist}</div>
        //       <div className="song-props" style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
        //         <Chip className="song-time" label={this.getTimeLabel()} />
        //         {items}
        //       </div>
        //       <div className="song-img"><img src={this.props.song.img} alt={this.props.song.title}/></div>
        //       <div className="song-props" style={{display:"flex", justifyContent: "center"}}>
        //         <Chip className="song-time" label={this.props.song.genre} />
        //         <Chip className="song-time" label={this.props.song.mood} />
        //       </div>
        //       <div>
        //       </div>
        //     <div className="add-to-playlist" style={{paddingBottom: "8px"}}><Button variant="secondary" style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black"}}
        //       onClick={this.removeFromPlaylist}>Remove</Button></div>
        // </div>
        <div className="playlist-card" style={{display:"flex", alignItems: "center"}}>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <div className="song-img" style={{margin: "10px"}} ><img style={{width: "140px", height: "140px"}} src={this.props.song.img} alt={this.props.song.title}/></div>
          <div className="song-info">
            <div style={{alignItems: "center", marginBottom: "12px", marginLeft: "10px"}}> 
              <div className="song-title" style={{marginRight: "10px", textAlign: "left"}}>{this.props.song.title}</div>
              <div className="song-artist" style={{alignItems: "center", marginBottom: "none", textAlign: "left"}}>{this.props.song.artist}</div>
            </div>
            <div className="song-props" style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                <Chip className="song-time" label={this.getTimeLabel()} />
                {items}
              </div>
              <div className="song-props" style={{display:"flex", justifyContent: "center"}}>
                <Chip className="song-time" label={this.props.song.genre} />
                <Chip className="song-time" label={this.props.song.mood} />
              </div>
          </div>
            <div className="add-to-playlist" style={{marginLeft: "15px", marginRight: "7px"}}><Button variant="secondary" style={{backgroundColor: "#ee8d8d", borderColor: "#ee8d8d", color: "black"}}
              onClick={this.removeFromPlaylist}>×</Button></div>
        </div>
      );
    }
  }
  