import './App.css';
import React from 'react';
import ColorDisplay from './Color-display';

export default class App extends React.Component {

  constructor(props){
    super(props);
    
    var randomColor = require('randomcolor');
    this.state = {
      colors: [randomColor(), randomColor(), randomColor(), randomColor(), randomColor()],
    };
  }

  refreshColor = (color) => {
    var randomColor = require('randomcolor');
    var colors = this.state.colors;
    var i = 0;
    for (i = 0; i < 5; i++) {
      if (colors[i] === color){
        colors[i] = randomColor();
      }
    }
    this.setState({ colors });
  }


  render(){
    return (
      <div className="App">
        {this.state.colors.map((color) =>
        <ColorDisplay color={color} refresh={this.refreshColor}/>
        )}
      </div>
    );
  }
}
