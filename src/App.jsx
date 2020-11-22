import './App.css';
import React from 'react';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookbook from './Cookbook';

export default class App extends React.Component {

  constructor(props){
    super(props);
    
    this.recipesList = [
      { title: "Chocolate Chip Cookies", rating: 5, time: 20, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Dessert", level: "Easy"},
      { title: "Old Fashioned Pancakes", rating: 4, time: 30, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Breakfast", level: "Easy"},
      { title: "Dutch Baby Pancake", rating: 4, time: 120, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Breakfast", level: "Hard"},
      { title: "Wisconsin Mac and Cheese", rating: 3, time: 20, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Dinner", level: "easy"},
      { title: "Grilled Chicken Sandwich", rating: 4, time: 35, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Lunch", level: "Medium"},
      { title: "Bean Burrito", rating: 2, time: 15, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Lunch", level: "Easy"},
      { title: "Sesame Chicken", rating: 3, time: 50, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Dinner", level: "Medium"},
      { title: "French Macarons", rating: 5, time: 120, 
        description: "the best!", img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
        meal: "Dessert", level: "Hard"},
    ]
     
    this.state = {
      cookbook: [],
    };

    this.totalTime = 0;
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

  addToCookbook = (recipe) => {
    var cookbook = this.state.cookbook;
    if (!cookbook.includes(recipe)){
      cookbook.push(recipe);
    }
    this.totalTime += recipe.time;
    this.setState({ cookbook });
  }

  removeFromCookbook = (recipe) => {
    var cookbook = this.state.cookbook;
    if (cookbook.includes(recipe)) {
      const index = cookbook.indexOf(recipe);
      cookbook.splice(index, index + 1);
    }
    this.totalTime -= recipe.time;
    this.setState({ cookbook });
  }


  render(){
    return (
      <div className="App">
        <div className="overall-title">Recipe Book</div>
        <div className="app-container">
          <div className="left-side">
            <div> Filtering Options </div>
            <FilteredList list={this.recipesList} addToCookbook={this.addToCookbook} />
          </div>
          <div className="right-side">
            <Cookbook list={this.state.cookbook} removeFromCookbook={this.removeFromCookbook} totalTime={this.totalTime}/>
          </div>
        </div>

        {/* {this.state.colors.map((color) =>
        <ColorDisplay color={color} refresh={this.refreshColor}/>
        )} */}
      </div>
    );
  }
}
