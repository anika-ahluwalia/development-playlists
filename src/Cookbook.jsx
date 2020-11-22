import './App.css';
import React from 'react';
import CookbookCard from './CookbookCard';

export default class Cookbook extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="cookbook">
            <div>Cookbook</div>
            <div>{this.props.list.map(item => <CookbookCard recipe={item} removeFromCookbook={this.props.removeFromCookbook}/>)}</div>
            <div>Total Time = {this.props.totalTime}</div>
        </div>
    );
  }
}