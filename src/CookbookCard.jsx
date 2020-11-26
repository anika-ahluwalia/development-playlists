import './App.css';
import React from 'react';
import Button from 'react-bootstrap/Button'
import Icon from '@material-ui/core/Icon';
import Chip from '@material-ui/core/Chip';
import TextField from '@material-ui/core/TextField';

export default class CookbookCard extends React.Component {

    constructor(props){
      super(props);

      this.state = {
        number: String(this.props.recipe.number)
      };
    }
    
    removeFromCookbook = () => {
      this.props.removeFromCookbook(this.props.recipe);
    }

    isNumber = (str) => {
      return (!isNaN(str) && !isNaN(parseFloat(str)))
    }

    submitHandler(event) {
      event.preventDefault();
    }

    changeNumber = (event) => {
      console.log(event.target.value);
      const number = event.target.value;
      this.setState({ number });
      if (this.isNumber(this.number)){
        
      }
    }
  
    render(){

      var items = []; 
      var index = 0;

      while (index < this.props.recipe.rating) {
        index += 1;
        items.push(<Icon fontSize="small" style={{color: "#b4dab1", fontSize: "22px"}}>star</Icon>)
      }

      return (
        <div className="cookbook-card">
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
              <div>
              {/* <div  style={{display: "flex", height:"40px", justifyContent: "center", marginBottom: "10px"}}>
                <Button style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black"}}>-</Button>
                  <form noValidate autoComplete="off" onSubmit={this.submitHandler} style={{maxWidth:"70px"}}>
                    {this.isNumber(this.state.number) ? 
                      <TextField
                        inputProps={{ style: {height: "4px" } }}
                        onChange={this.changeNumber}
                        id="outlined"
                        value={this.state.number}
                        variant="outlined" /> : 
                    <TextField
                      error
                      inputProps={{ style: {height: "4px" } }}
                      onChange={this.changeNumber}
                      id="outlined-error"
                      label="Error"
                      value={this.state.number}
                      variant="outlined"
                    /> }
                  </form>
                <Button style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black"}}>+</Button>
              </div> */}
              </div>
            <div className="add-to-book" style={{paddingBottom: "8px"}}><Button variant="secondary" style={{backgroundColor: "#b4dab1", borderColor: "#b4dab1", color: "black"}}
              onClick={this.removeFromCookbook}>Remove</Button></div>
        </div>
      );
    }
  }
  