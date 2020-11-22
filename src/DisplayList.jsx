import './App.css';
import React from 'react';
import RecipeCard from './RecipeCard';

export default class DisplayList extends React.Component {

  constructor(props){
    super(props);
  }
  
  render(){
    return (
      <div className="display-list">
          <div>
                {this.props.list.map(item => <RecipeCard recipe={item}/>)}
            </div>
        </div>
    );
  }
}