import './App.css';
import React from 'react';
import DisplayList from './DisplayList';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

export default class FilteredList extends React.Component {

    // includes state for the various filters and sorting mechanisms
    constructor(props){
        super(props);
        this.state = {
            genre: "All",
            mood: "All",
            sortingOrder: "Select",
            sorting: "Time",
            search: "",
        }
    }

    // changes the genre that is being filtered through
    onSelectFilterGenre = (genre) => {
        this.setState({
            genre: genre
        })
    };

    // checks if each song matches the selected genre
    matchesFilterGenre = (item) => {
        if(this.state.genre === "All") { 
            return true
        } else if (this.state.genre === item.genre) {
            return true
        } else {
            return false
        }
    }

    // changes the mood that is being filtered through
    onSelectFilterMood = (event) => {
        this.setState({
            mood: event
        })
    };

    // checks if each song matches the selected mood
    matchesFilterMood = (item) => {
        if(this.state.mood === "All") { 
            return true
        } else if (this.state.mood === item.mood) {
            return true
        } else {
            return false
        }
    }

    // changes the criteria that the data is being sorting on
    onChangeSorting = (event) => {
        this.setState({
            sorting: event.target.value
        })
    };

    // changes the order of the data's sorting
    onSelectSorting = (event) => {
        this.setState({
            sortingOrder: event.target.value
        })
    };

    // determines the order between two songs based on their time
    sortTime = (a, b) => {
        // checks the order by which to sort
        if (this.state.sortingOrder === "Lowest to Highest"){
            // checks the time of the two songs and returns their order
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
        // if there is no order, everything remains where it is
        } else {
            return 0;
        }
    }

    // determines the order between two songs based on their rating
    sortRating = (a, b) => {
        // checks the order by which to sort
        if (this.state.sortingOrder === "Lowest to Highest"){
            // checks the rating of the two songs and returns their order
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
        // if there is no order, everything remains where it is
        } else {
            return 0;
        }
    }

    // changes the term that is being searched by
    changeSearch = event => {
        const search = event.target.value;
        this.setState({ search });
    }
    
    // checks if a song title is in the search term
    inSearch = item => {
        if (item.title.toLowerCase().includes(this.state.search.toLowerCase())){
            return true;
        }
    }

    // renders the filtering options and the list
    render() {
        return (
        <div className="filtered-list">
            {/* displays all the filtering categories */}
            <div className={this.props.playlist.length > 0 ? "filters" : "full-filters"} >
                <div className="filter-section">
                    <div className="section-title" >Search: </div>
                    <TextField  className="song-title" value={this.state.search} 
                        onChange={this.changeSearch} 
                        inputProps={{ style: {fontSize: "16px", height: "20px", width: "240px"} }} 
                        id="outlined-basic" label="Search by Song Title" variant="outlined" />
                </div>
                <div style={this.props.playlist.length <= 0 ? { paddingLeft: "25px", paddingRight: "25px" } : {margin: "0"}}>
                    <div className="filter-section">
                        <div className="section-title">Genre: </div>
                        <ButtonGroup disableElevation aria-label="outlined secondary button group">
                            <Button style={{backgroundColor: this.state.genre === "All" ? "#5cd654" : ""}} 
                                onClick={() => this.onSelectFilterGenre("All")}>All</Button>
                            <Button style={{backgroundColor: this.state.genre === "Indie" ? "#5cd654" : ""}} 
                                onClick={() => this.onSelectFilterGenre("Indie")}>Indie</Button>
                            <Button style={{backgroundColor: this.state.genre === "Pop" ? "#5cd654" : ""}} 
                                onClick={() => this.onSelectFilterGenre("Pop")}>Pop</Button>
                            <Button style={{backgroundColor: this.state.genre === "Hip Hop" ? "#5cd654" : ""}} 
                                onClick={() => this.onSelectFilterGenre("Hip Hop")}>Hip Hop</Button>
                        </ButtonGroup>
                    </div>

                    <div className="filter-section" style={{display: "flex"}}>
                        <div className="section-title" >Mood: </div>
                        <ButtonGroup disableElevation aria-label="outlined secondary button group">
                            <Button style={{backgroundColor: this.state.mood === "All" ? "#5cd654" : ""}} 
                                onClick={() => this.onSelectFilterMood("All")}>All</Button>
                            <Button style={{backgroundColor: this.state.mood === "Happy" ? "#5cd654" : ""}} 
                                onClick={() => this.onSelectFilterMood("Happy")}>Happy</Button>
                            <Button style={{backgroundColor: this.state.mood === "Sad" ? "#5cd654" : ""}} 
                                onClick={() => this.onSelectFilterMood("Sad")}>Sad</Button>
                            <Button style={{backgroundColor: this.state.mood === "Energetic" ? "#5cd654" : ""}} 
                                onClick={() => this.onSelectFilterMood("Energetic")}>Energetic</Button>
                        </ButtonGroup>
                    </div>
                </div>

                <div className="filter-section">
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
            {/* displays the actual list filtered out by the specified filters */}
            <DisplayList 
                list={this.props.list.filter(item => this.matchesFilterMood(item) && 
                    this.matchesFilterGenre(item) ? true : false).sort((a, b) => 
                    this.state.sorting === "Time" ? this.sortTime(a,b) : this.sortRating(a,b)).filter(this.inSearch)} 
                addToPlaylist={this.props.addToPlaylist}/>
        </div>
        );
    }
}
