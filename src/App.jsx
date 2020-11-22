import './App.css';
import React from 'react';
import FilteredList from './FilteredList';

export default class App extends React.Component {

  constructor(props){
    super(props);
    
    this.recipesList = [
      { title: "Chocolate Chip Cookies", rating: 5, time: "20 min", 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "dessert", level: "easy"},
      { title: "Chocolate Chip Cookies", rating: 5, time: "20 min", 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "dessert", level: "easy"},
      { title: "Chocolate Chip Cookies", rating: 5, time: "20 min", 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "dessert", level: "easy"},
      { title: "Chocolate Chip Cookies", rating: 5, time: "20 min", 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "dessert", level: "easy"},
      { title: "Chocolate Chip Cookies", rating: 5, time: "20 min", 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "dessert", level: "easy"},
    ]
     
    // var randomColor = require('randomcolor');
    // this.state = {
    //   colors: [randomColor(), randomColor(), randomColor(), randomColor(), randomColor()],
    // };
  }

  // refreshColor = (color) => {
  //   var randomColor = require('randomcolor');
  //   var colors = this.state.colors;
  //   var i = 0;
  //   for (i = 0; i < 5; i++) {
  //     if (colors[i] === color){
  //       colors[i] = randomColor();
  //     }
  //   }
  //   this.setState({ colors });
  // }


  render(){
    return (
      <div className="App">
        <div className="overall-title">Recipe Book</div>
        <div className="app-container">
          <div className="left-side">
            <div> Filtering Options </div>
            <FilteredList list={this.recipesList} />
          </div>
          <div className="right-side">
            <div>aggregator</div>
          </div>
        </div>

        {/* {this.state.colors.map((color) =>
        <ColorDisplay color={color} refresh={this.refreshColor}/>
        )} */}
      </div>
    );
  }
}
