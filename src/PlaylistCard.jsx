import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';

export default class PlaylistCard extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        number: String(this.props.song.number)
      };
    }
    
    removeFromPlaylist = () => {
      this.props.removeFromPlaylist(this.props.song);
    }

    isNumber = (str) => {
      return (!isNaN(str) && !isNaN(parseFloat(str)))
    }

    submitHandler(event) {
      event.preventDefault();
    }

    changeNumber = (event) => {
      console.log(event.target.value);
      const number = event.target.value;
      this.setState({ number });
      if (this.isNumber(this.number)){
        
      }
    }
  
    render(){

      var items = []; 
      var index = 0;

      while (index < this.props.song.rating) {
        index += 1;
        items.push(<Icon fontSize="small" style={{color: "#b4dab1", fontSize: "22px"}}>star</Icon>)
      }

      return (
        <div className="playlist-card">
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
              <div>
              {/* <div  style={{display: "flex", height:"40px", justifyContent: "center", marginBottom: "10px"}}>
                <Button style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black"}}>-</Button>
                  <form noValidate autoComplete="off" onSubmit={this.submitHandler} style={{maxWidth:"70px"}}>
                    {this.isNumber(this.state.number) ? 
                      <TextField
                        inputProps={{ style: {height: "4px" } }}
                        onChange={this.changeNumber}
                        id="outlined"
                        value={this.state.number}
                        variant="outlined" /> : 
                    <TextField
                      error
                      inputProps={{ style: {height: "4px" } }}
                      onChange={this.changeNumber}
                      id="outlined-error"
                      label="Error"
                      value={this.state.number}
                      variant="outlined"
                    /> }
                  </form>
                <Button style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black"}}>+</Button>
              </div> */}
              </div>
            <div className="add-to-playlist" style={{paddingBottom: "8px"}}><Button variant="secondary" style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black"}}
              onClick={this.removeFromPlaylist}>Remove</Button></div>
        </div>
      );
    }
  }
  