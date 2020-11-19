import './App.css';
import React from 'react';

export default class ColorDisplay extends React.Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="color-display" onClick={() => {this.props.refresh(this.props.color)}}>
        <div class="color-display" style={{backgroundColor: this.props.color}}/>
      </div>
    );
  }
}
