import './App.css';
import React from 'react';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cookbook from './Cookbook';

export default class App extends React.Component {

  constructor(props){
    super(props);
     
    this.state = {
      cookbook: [],
      recipesList: [
        { title: "Chocolate Chip Cookies", rating: 5, time: 30, 
          img: "https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg", 
          meal: "Dessert", level: "Easy", number: 0},
        { title: "Macaroni and Cheese", rating: 3, time: 15, 
          img: "https://pinchofyum.com/wp-content/uploads/Instant-Pot-Mac-and-Cheese-Square.jpg", 
          meal: "Lunch", level: "Easy", number: 0},
        { title: "Lemon Salmon", rating: 4, time: 30, 
          img: "https://www.tastesoflizzyt.com/wp-content/uploads/2019/08/lemon-garlic-butter-salmon-recipe-8.jpg", 
          meal: "Dinner", level: "Medium", number: 0},
        { title: "Avocado Toast", rating: 5, time: 10, 
          img: "https://gimmedelicious.com/wp-content/uploads/2016/07/avocado-toast-7-of-13-500x500.jpg", 
          meal: "Breakfast", level: "Easy", number: 0},
        { title: "Cinnamon Buns", rating: 4, time: 100, 
          img: "https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Skillet-Bacon-Cinnamon-Buns_EXPS_CIMZW19_212428_B09_12_9b.jpg", 
          meal: "Dessert", level: "Hard", number: 0},
        { title: "Spaghetti and Meatballs", rating: 2, time: 50, 
          img: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/Spaghetti-meatballs-with-hidden-veg-sauce-67ccf78-scaled.jpg?quality=45&resize=504,458?quality=90&webp=true&resize=504,459", 
          meal: "Dinner", level: "Medium", number: 0},
        { title: "Dutch Baby", rating: 5, time: 120, 
          img: "https://rasamalaysia.com/wp-content/uploads/2018/04/dutch-baby-pancake-thumb.jpg", 
          meal: "Breakfast", level: "Hard", number: 0},
        { title: "French Macarons", rating: 4, time: 90, 
          img: "https://t8x8a5p2.stackpathcdn.com/wp-content/uploads/2016/03/How-to-Make-French-Macarons-Recipe-Image-720x720.jpg", 
          meal: "Dessert", level: "Hard", number: 0},
        { title: "Grilled Cheese", rating: 5, time: 10, 
          img: "https://cdn.vox-cdn.com/thumbor/toOyo6o1wmiaSe_dg5qe91aQZYk=/0x0:5266x3511/1200x900/filters:focal(2212x1335:3054x2177)/cdn.vox-cdn.com/uploads/chorus_image/image/62361334/shutterstock_645742051.12.jpg", 
          meal: "Lunch", level: "Easy", number: 0},
        { title: "Pot Roast", rating: 1, time: 60, 
          img: "https://thestayathomechef.com/wp-content/uploads/2019/01/Braised-Pot-Roast-1-500x500.jpg", 
          meal: "Dinner", level: "Medium", number: 0},
        { title: "Sesame Chicken", rating: 3, time: 60, 
          img: "https://www.daringgourmet.com/wp-content/uploads/2014/08/Sesame-Chicken-5-square-scaled.jpg", 
          meal: "Lunch", level: "Medium", number: 0},
      ]
    };

    this.totalTime = 0;
  }

  addToCookbook = (recipe) => {
    var cookbook = this.state.cookbook;
    if (!cookbook.includes(recipe)){
      recipe.number = 1;
      cookbook.push(recipe);
      this.totalTime += recipe.time;
    } else {
      recipe.number += 1;
      this.totalTime += recipe.time;
    }
    this.setState({ cookbook });
  }

  // changeNumber = (recipe, number) => {
  //   var cookbook = this.state.cookbook;
  //   if (cookbook.includes(recipe)) {
  //     recipe.number = number;
  //     this.totalTime -= recipe.time * recipe.number;
  //     this.totalTime += recipe.time * number;
  //   }
  //   this.setState({ cookbook });
  // }

  removeFromCookbook = (recipe) => {
    var cookbook = this.state.cookbook;
    const index = cookbook.indexOf(recipe);
    cookbook.splice(index, index + 1);
    this.totalTime -= recipe.time * recipe.number;
    this.setState({ cookbook });
  }


  render(){
    return (
      <div className="App">
        <div className="overall-title">Recipe Book</div>
        <div className="app-container">
          <div className="left-side">
            <FilteredList list={this.state.recipesList} addToCookbook={this.addToCookbook} />
          </div>
          <div className="right-side">
            <Cookbook list={this.state.cookbook} removeFromCookbook={this.removeFromCookbook} totalTime={this.totalTime}/>
          </div>
        </div>
      </div>
    );
  }
}
