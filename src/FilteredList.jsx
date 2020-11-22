import './App.css';
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import DisplayList from './DisplayList';
import Dropdown from 'react-bootstrap/Dropdown';

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

    onSelectFilterLevel = (event) => {
        this.setState({
            level: event
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
            sorting: event
        })
    };

    onSelectSorting = (event) => {
        this.setState({
            sortingOrder: event
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
            <Navbar className="fitler" style={{display: "flex"}} bg="dark" variant="dark">
                <Navbar.Brand>Level: </Navbar.Brand>
                <Nav.Item className="filter-item"><Nav.Link eventKey="All" onSelect={this.onSelectFilterLevel}>All</Nav.Link></Nav.Item>
                <Nav.Item className="filter-item"><Nav.Link eventKey="Easy" onSelect={this.onSelectFilterLevel}>Easy</Nav.Link></Nav.Item>
                <Nav.Item className="filter-item"><Nav.Link eventKey="Medium" onSelect={this.onSelectFilterLevel}>Medium</Nav.Link></Nav.Item>
                <Nav.Item className="filter-item"><Nav.Link eventKey="Hard" onSelect={this.onSelectFilterLevel}>Hard</Nav.Link></Nav.Item>
            </Navbar>

            <Navbar className="fitler" style={{display: "flex"}} bg="dark" variant="dark">
                <Navbar.Brand>Meal: </Navbar.Brand>
                <Nav.Item className="filter-item"><Nav.Link eventKey="All" onSelect={this.onSelectFilterMeal}>All</Nav.Link></Nav.Item>
                <Nav.Item className="filter-item"><Nav.Link eventKey="Breakfast" onSelect={this.onSelectFilterMeal}>Breakfast</Nav.Link></Nav.Item>
                <Nav.Item className="filter-item"><Nav.Link eventKey="Lunch" onSelect={this.onSelectFilterMeal}>Lunch</Nav.Link></Nav.Item>
                <Nav.Item className="filter-item"><Nav.Link eventKey="Dinner" onSelect={this.onSelectFilterMeal}>Dinner</Nav.Link></Nav.Item>
                <Nav.Item className="filter-item"><Nav.Link eventKey="Dessert" onSelect={this.onSelectFilterMeal}>Dessert</Nav.Link></Nav.Item>
            </Navbar>

            <div style={{display: "flex"}}>
                <div>Sort by </div>
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-primary">
                        {this.state.sorting}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Cooking Time" onSelect={this.onChangeSorting}>Cooking Time</Dropdown.Item>
                        <Dropdown.Item eventKey="Rating" onSelect={this.onChangeSorting}>Rating</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <Dropdown>
                    <Dropdown.Toggle id="dropdown-primary">
                        {this.state.sortingOrder}
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                        <Dropdown.Item eventKey="Select" onSelect={this.onSelectSorting}>Select</Dropdown.Item>
                        <Dropdown.Item eventKey="Lowest to Highest" onSelect={this.onSelectSorting}>Lowest to Highest</Dropdown.Item>
                        <Dropdown.Item eventKey="Highest to Lowest" onSelect={this.onSelectSorting}>Highest to Lowest</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            </div>
            <DisplayList list={this.props.list.filter(item => this.matchesFilterMeal(item) && 
                this.matchesFilterLevel(item) ? true : false).sort((a, b) => this.state.sorting == "Cooking Time" ? this.sortTime(a,b) : this.sortRating(a,b))} 
                addToCookbook={this.props.addToCookbook}/>
        </div>
        );
    }
}
