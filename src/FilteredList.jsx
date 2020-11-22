import './App.css';
import React from 'react';

export default class FilteredList extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        level: "All",
        meal: "All"
    };
  }

  onSelectFilterLevel = () => {

  }

  matchesFilterLevel = () => {
      
  }

  render(){
    return (
      <div className="filtered-list">
          
      </div>
    );
  }
}
