import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'

export default class RecipeCard extends React.Component {

    constructor(props){
      super(props);
    }
    
    addToCookbook = () => {
      this.props.addToCookbook(this.props.recipe);
    }
  
    render(){
      return (
        <div className="recipe-card">
            {/* <div>Recipe Title</div>
            <div>Recipe Rating</div>
            <div>Recipe Time and Level </div>
            <div>Recipe Description</div>
            <div>Recipe Photo</div> */}
            {/* <img src="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg"/> */}
            <div>{this.props.recipe.title}</div>
            <div>{this.props.recipe.time}</div>
            <div>{this.props.recipe.rating}</div>
            <Button variant="secondary" onClick={this.addToCookbook}>Add to Cookbook</Button>
        </div>
      );
    }
  }
  