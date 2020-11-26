import './App.css';
import React from 'react';
import SongCard from './SongCard';
import Row from 'react-bootstrap/Row'

export default class DisplayList extends React.Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="display-list">
          <Row style={{justifyContent:"center"}}>
              {this.props.list.map(item => <SongCard song={item} addToPlaylist={this.props.addToPlaylist}/>)}
            </Row>
        </div>
    );
  }
}