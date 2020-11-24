import './App.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DisplayList from './DisplayList';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';

export default class FilteredList extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            level: "All",
            meal: "All",
            sortingOrder: "Select",
            sorting: "Cooking Time"
        }
    }

    onSelectFilterLevel = (level) => {
        this.setState({
            level: level
        })
    };

    matchesFilterLevel = (item) => {
        // all items should be shown when no filter is selected
        if(this.state.level === "All") { 
            return true
        } else if (this.state.level === item.level) {
            return true
        } else {
            return false
        }
    }

    onSelectFilterMeal = (event) => {
        this.setState({
            meal: event
        })
    };

    matchesFilterMeal = (item) => {
        // all items should be shown when no filter is selected
        if(this.state.meal === "All") { 
            return true
        } else if (this.state.meal === item.meal) {
            return true
        } else {
            return false
        }
    }

    onChangeSorting = (event) => {
        this.setState({
            sorting: event.target.value
        })
    };

    onSelectSorting = (event) => {
        this.setState({
            sortingOrder: event.target.value
        })
    };

    sortTime = (a, b) => {
        if (this.state.sortingOrder === "Lowest to Highest"){
            if (a.time > b.time) {
                return 1;
            }
            if (a.time < b.time) {
                return -1;
            } 
            return 0;
        } else if (this.state.sortingOrder === "Highest to Lowest"){
            if (a.time > b.time) {
                return -1;
            }
            if (a.time < b.time) {
                return 1;
            } 
            return 0;
        } else {
            return 0;
        }
    }

    sortRating = (a, b) => {
        if (this.state.sortingOrder === "Lowest to Highest"){
            if (a.rating > b.rating) {
                return 1;
            }
            if (a.rating < b.rating) {
                return -1;
            } 
            return 0;
        } else if (this.state.sortingOrder === "Highest to Lowest"){
            if (a.rating > b.rating) {
                return -1;
            }
            if (a.rating < b.rating) {
                return 1;
            } 
            return 0;
        } else {
            return 0;
        }
    }

    render() {
        return (
        <div className="filtered-list">
            <div className="filters">
                <div className="filter-section" style={{display: "flex"}}>
                    <div className="section-title">Level: </div>
                    <ButtonGroup disableElevation aria-label="outlined secondary button group">
                        <Button style={{backgroundColor: this.state.level == "All" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterLevel("All")}>All</Button>
                        <Button style={{backgroundColor: this.state.level == "Easy" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterLevel("Easy")}>Easy</Button>
                        <Button style={{backgroundColor: this.state.level == "Medium" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterLevel("Medium")}>Medium</Button>
                        <Button style={{backgroundColor: this.state.level == "Hard" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterLevel("Hard")}>Hard</Button>
                    </ButtonGroup>
                </div>

                <div className="filter-section" style={{display: "flex"}}>
                    <div className="section-title" >Meal: </div>
                    <ButtonGroup disableElevation aria-label="outlined secondary button group">
                        <Button style={{backgroundColor: this.state.meal == "All" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterMeal("All")}>All</Button>
                        <Button style={{backgroundColor: this.state.meal == "Breakfast" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterMeal("Breakfast")}>Breakfast</Button>
                        <Button style={{backgroundColor: this.state.meal == "Lunch" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterMeal("Lunch")}>Lunch</Button>
                        <Button style={{backgroundColor: this.state.meal == "Dinner" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterMeal("Dinner")}>Dinner</Button>
                        <Button style={{backgroundColor: this.state.meal == "Dessert" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterMeal("Dessert")}>Dessert</Button>
                    </ButtonGroup>
                </div>

                <div className="filter-section" style={{display: "flex"}}>
                    <div className="section-title">Sort by: </div>
                    <div className="section-title">
                        <FormControl>
                            <Select
                                value={this.state.sorting}
                                onChange={this.onChangeSorting}>
                            <MenuItem value={"Cooking Time"}>Cooking Time</MenuItem>
                            <MenuItem value={"Rating"}>Rating</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className="section-title">
                        <FormControl>
                            <Select
                                value={this.state.sortingOrder}
                                onChange={this.onSelectSorting}>
                            <MenuItem value={"Select"}>Select</MenuItem>
                            <MenuItem value={"Lowest to Highest"}>Lowest to Highest</MenuItem>
                            <MenuItem value={"Highest to Lowest"}>Highest to Lowest</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                </div>
            </div>
            <DisplayList list={this.props.list.filter(item => this.matchesFilterMeal(item) && 
                this.matchesFilterLevel(item) ? true : false).sort((a, b) => this.state.sorting == "Cooking Time" ? this.sortTime(a,b) : this.sortRating(a,b))} 
                addToCookbook={this.props.addToCookbook}/>
        </div>
        );
    }
}
