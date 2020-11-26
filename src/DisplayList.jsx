import './App.css';
import React from 'react';
import RecipeCard from './RecipeCard';
import Row from 'react-bootstrap/Row'

export default class DisplayList extends React.Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="display-list">
          <Row style={{justifyContent:"center"}}>
              {this.props.list.map(item => <RecipeCard recipe={item} addToCookbook={this.props.addToCookbook}/>)}
            </Row>
        </div>
    );
  }
}