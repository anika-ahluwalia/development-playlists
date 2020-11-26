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
            genre: "All",
            mood: "All",
            sortingOrder: "Select",
            sorting: "Time"
        }
    }

    onSelectFilterGenre = (genre) => {
        this.setState({
            genre: genre
        })
    };

    matchesFilterGenre = (item) => {
        // all items should be shown when no filter is selected
        if(this.state.genre === "All") { 
            return true
        } else if (this.state.genre === item.genre) {
            return true
        } else {
            return false
        }
    }

    onSelectFilterMood = (event) => {
        this.setState({
            mood: event
        })
    };

    matchesFilterMood = (item) => {
        // all items should be shown when no filter is selected
        if(this.state.mood === "All") { 
            return true
        } else if (this.state.mood === item.mood) {
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
                    <div className="section-title">Genre: </div>
                    <ButtonGroup disableElevation aria-label="outlined secondary button group">
                        <Button style={{backgroundColor: this.state.genre == "All" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterGenre("All")}>All</Button>
                        <Button style={{backgroundColor: this.state.genre == "Indie" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterGenre("Indie")}>Indie</Button>
                        <Button style={{backgroundColor: this.state.genre == "Pop" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterGenre("Pop")}>Pop</Button>
                        <Button style={{backgroundColor: this.state.genre == "Hip Hop" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterGenre("Hip Hop")}>Hip Hop</Button>
                    </ButtonGroup>
                </div>

                <div className="filter-section" style={{display: "flex"}}>
                    <div className="section-title" >Mood: </div>
                    <ButtonGroup disableElevation aria-label="outlined secondary button group">
                        <Button style={{backgroundColor: this.state.mood == "All" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterMood("All")}>All</Button>
                        <Button style={{backgroundColor: this.state.mood == "Happy" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterMood("Happy")}>Happy</Button>
                        <Button style={{backgroundColor: this.state.mood == "Sad" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterMood("Sad")}>Sad</Button>
                        <Button style={{backgroundColor: this.state.mood == "Energetic" ? "#b4dab1" : ""}} 
                            onClick={() => this.onSelectFilterMood("Energetic")}>Energetic</Button>
                    </ButtonGroup>
                </div>

                <div className="filter-section" style={{display: "flex"}}>
                    <div className="section-title">Sort by: </div>
                    <div className="section-title">
                        <FormControl>
                            <Select
                                value={this.state.sorting}
                                onChange={this.onChangeSorting}>
                            <MenuItem value={"Time"}>Time</MenuItem>
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
            <DisplayList list={this.props.list.filter(item => this.matchesFilterMood(item) && 
                this.matchesFilterGenre(item) ? true : false).sort((a, b) => this.state.sorting == "Time" ? this.sortTime(a,b) : this.sortRating(a,b))} 
                addToPlaylist={this.props.addToPlaylist}/>
        </div>
        );
    }
}
