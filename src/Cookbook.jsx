import './App.css';
import React from 'react';
import CookbookCard from './CookbookCard';
import Row from 'react-bootstrap/Row'

export default class Cookbook extends React.Component {

  constructor(props){
    super(props);
  }

  render(){
    return (
        <div className="cookbook">
            <div className="recipe-title" style={{fontSize: "25px"}}>Cookbook</div>
            <Row style={{justifyContent:"center"}}>{this.props.list.map(item => <CookbookCard recipe={item} removeFromCookbook={this.props.removeFromCookbook}/>)}</Row>
            <div className="total-time">Total Time: {this.props.totalTime} minutes</div>
        </div>
    );
  }
}