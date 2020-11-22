import './App.css';
import React from 'react';

export default class RecipeCard extends React.Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="recipe-card">
          <div>Recipe Title</div>
          <div>Recipe Rating</div>
          <div>Recipe Time and Level </div>
          <div>Recipe Description</div>
          <div>Recipe Photo</div>
          {/* <img src="https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/08/chocolate-chip-cookies-1.jpg"/> */}
          <div>Recipe Tags</div>
      </div>
    );
  }
}
