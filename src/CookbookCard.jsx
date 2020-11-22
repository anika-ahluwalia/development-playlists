import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'

export default class CookbookCard extends React.Component {

    constructor(props){
      super(props);
    }
    
    removeFromCookbook = () => {
      this.props.removeFromCookbook(this.props.recipe);
    }
  
    render(){
      return (
        <div className="recipe-card">
            <div>{this.props.recipe.title}</div>
            <div>{this.props.recipe.time}</div>
            <Button variant="secondary" onClick={this.removeFromCookbook}>Remove from Cookbook</Button>
        </div>
      );
    }
  }
  