import './App.css';
import React from 'react';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends React.Component {

  constructor(props){
    super(props);
    
    this.recipesList = [
      { title: "Chocolate Chip Cookies", rating: 5, time: 20, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Dessert", level: "Easy"},
      { title: "Old Fashioned Pancakes", rating: 5, time: 30, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Breakfast", level: "Easy"},
      { title: "Dutch Baby Pancake", rating: 5, time: 120, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Breakfast", level: "Hard"},
      { title: "Wisconsin Mac and Cheese", rating: 5, time: 20, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Dinner", level: "easy"},
      { title: "Grilled Chicken Sandwich", rating: 5, time: 35, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Lunch", level: "Medium"},
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
