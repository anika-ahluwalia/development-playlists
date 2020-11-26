import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';

export default class RecipeCard extends React.Component {

    constructor(props){
      super(props);
    }
    
    addToCookbook = () => {
      this.props.addToCookbook(this.props.recipe);
    }
  
    render(){

      var items = []; 
      var index = 0;

      while (index < this.props.recipe.rating) {
        index += 1;
        items.push(<Icon style={{color: "#b4dab1", fontSize: "22px"}}>star</Icon>)
      }

      return (
        <div className="recipe-card">
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <div className="recipe-title">{this.props.recipe.title}</div>
            <div className="recipe-props" style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
              <Chip className="recipe-time" label={this.props.recipe.time + " minutes"} />
              {items}
            </div>
            <div className="recipe-img"><img src={this.props.recipe.img} alt={this.props.recipe.title}/></div>
            <div className="recipe-props" style={{display:"flex", justifyContent: "center"}}>
              <Chip className="recipe-time" label={this.props.recipe.level} />
              <Chip className="recipe-time" label={this.props.recipe.meal} />
            </div>
            <div className="add-to-book" style={{paddingBottom: "8px"}}><Button variant="secondary" style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black"}}
              onClick={this.addToCookbook}>Add to Cookbook</Button></div>
        </div>
      );
    }
  }
  