import './App.css';
import React from 'react';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playlist from './Playlist';

export default class App extends React.Component {

  constructor(props){
    super(props);
     
    // setting variables that will change in the state
    this.state = {
      // initializing the playlist as an empty list that will be added to
      playlist: [],

      // initialzing a list of songs and their respective attributes (artist, rating, time, album image, genre, and mood)
      songsList: [
        { title: "Green Light", artist: "Lorde", rating: 5, time: 234, 
          img: "https://images.genius.com/135e9ae4d19e7816e0ffdd9a95922a0c.1000x1000x1.jpg",
          genre: "Indie", mood: "Energetic"},
        { title: "Sofia", artist: "Clairo", rating: 5, time: 188, 
          img: "https://images.genius.com/08dcb11c5d99d150b17b92a5e0f1f8b4.1000x1000x1.png",
          genre: "Indie", mood: "Happy"},
        { title: "POWER", artist: "Kanye West", rating: 4, time: 292, 
          img: "https://m.media-amazon.com/images/I/715Ag05hzQL._SS500_.jpg",
          genre: "Hip Hop", mood: "Energetic"},
        { title: "Pon de Replay", artist: "Rihanna", rating: 3, time: 246, 
          img: "https://i.pinimg.com/originals/99/59/21/9959212d85557bb497e322c66aec4b66.jpg",
          genre: "Pop", mood: "Energetic"},
        { title: "Jocelyn Flores", artist: "XXXTENTACTION", rating: 2, time: 119, 
          img: "https://i.pinimg.com/originals/c7/7e/60/c77e6003b548018f2bfc325efb54fa59.jpg",
          genre: "Hip Hop", mood: "Sad"},
        { title: "3 Nights", artist: "Dominic Fike", rating: 4, time: 177, 
          img: "https://m.media-amazon.com/images/I/71O5qaGo4zL._SS500_.jpg",
          genre: "Indie", mood: "Energetic"},
        { title: "Video Games", artist: "Lana Del Ray", rating: 3, time: 282, 
          img: "https://images.genius.com/25268f673e6364f69748e5f7bcc5aaa5.1000x1000x1.png",
          genre: "Indie", mood: "Sad"},
        { title: "8TEEN", artist: "Khalid", rating: 3, time: 228, 
          img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Khalid_-_American_Teen.png",
          genre: "Hip Hop", mood: "Happy"},
        { title: "Vampire", artist: "Dominic Fike", rating: 5, time: 186, 
          img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Dominic_fike_what_could_possibly_go_wrong.jpg",
          genre: "Indie", mood: "Happy"},
        { title: "Someone Like You", artist: "Adele", rating: 4, time: 285, 
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Adele_-_21.png/220px-Adele_-_21.png",
          genre: "Pop", mood: "Sad"},
        { title: "R.I.P. 2 My Youth", artist: "The Neighboorhood", rating: 5, time: 205, 
          img: "https://i.pinimg.com/originals/94/92/74/9492744da88ce7891d6ac912d0ea2fe4.jpg",
          genre: "Indie", mood: "Sad"},
        { title: "Saturday Sun", artist: "Vance Joy", rating: 3, time: 214, 
          img: "https://images-na.ssl-images-amazon.com/images/I/71yw%2BI5ObZL._SL1500_.jpg",
          genre: "Pop", mood: "Happy"},
        { title: "Knee Socks", artist: "Arctic Monkeys", rating: 4, time: 257, 
          img: "https://upload.wikimedia.org/wikipedia/en/0/04/Arctic_Monkeys_-_AM.png",
          genre: "Indie", mood: "Happy"},
        { title: "Pocketful of Sunshine", artist: "Natasha Bedingfield", rating: 4, time: 202, 
          img: "https://images-na.ssl-images-amazon.com/images/I/81-EGIxi8%2BL._SL1500_.jpg",
          genre: "Pop", mood: "Happy"},
        { title: "Broccoli", artist: "Lil Yachty", rating: 4, time: 225, 
          img: "https://upload.wikimedia.org/wikipedia/en/c/c4/BroccoliDRAM.jpg",
          genre: "Hip Hop", mood: "Happy"},
        { title: "Alleyways", artist: "The Neighboorhood", rating: 2, time: 267, 
          img: "https://upload.wikimedia.org/wikipedia/en/2/2f/Iloveyou_the_neighbourhood.jpeg",
          genre: "Indie", mood: "Sad"},
        { title: "Sunflower, Vol. 6", artist: "Harry Styles", rating: 4, time: 194, 
          img: "https://images-na.ssl-images-amazon.com/images/I/61uo57hXGxL._SL1200_.jpg",
          genre: "Pop", mood: "Happy"},
        { title: "BOY BYE", artist: "BROCKHAMPTON", rating: 4, time: 142, 
          img: "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/brkcohamp_gigner_ovdlb9/brockhampton-new-song-boy-bye-detail-ginger-2019.jpg",
          genre: "Hip Hop", mood: "Energetic"},
        { title: "Moon & Stars", artist: "$NOT", rating: 3, time: 187, 
          img: "https://m.media-amazon.com/images/I/81Uny2pvwTL._SS500_.jpg",
          genre: "Hip Hop", mood: "Happy"},
        { title: "Saturn", artist: "RIZ LA VIE", rating: 5, time: 207, 
          img: "https://i.pinimg.com/736x/1a/94/3b/1a943b84847b0dff1735c309962b625a.jpg",
          genre: "Hip Hop", mood: "Happy"},
        { title: "Va Va Voom", artist: "Nicki Minaj", rating: 4, time: 183, 
          img: "https://images-na.ssl-images-amazon.com/images/I/81G0s5Uv1ZL._SY355_.jpg",
          genre: "Pop", mood: "Energetic"},
        { title: "Lucid Dreams", artist: "Juice WRLD", rating: 1, time: 240, 
          img: "https://e-cdns-images.dzcdn.net/images/cover/f8c4db1b0f346d6e4b1558f734ad4523/500x500.jpg",
          genre: "Hip Hop", mood: "Sad"},
        { title: "Knock Knock", artist: "Mac Miller", rating: 4, time: 202, 
          img: "https://m.media-amazon.com/images/I/81puBBNXi1L._SS500_.jpg",
          genre: "Hip Hop", mood: "Energetic"},
        { title: "lovely", artist: "Billie Eilish, Khalid", rating: 2, time: 200, 
          img: "https://upload.wikimedia.org/wikipedia/en/6/62/Billie_Eilish_%26_Khalid_-_Lovely.png",
          genre: "Pop", mood: "Sad"},
        { title: "Dog Days Are Over", artist: "Florence + The Machine", rating: 4, time: 251, 
          img: "https://images-na.ssl-images-amazon.com/images/I/61Khx8MZhvL._SY355_.jpg",
          genre: "Pop", mood: "Happy"},
        { title: "Potential Breakup Song", artist: "Aly & AJ", rating: 4, time: 219, 
          img: "https://m.media-amazon.com/images/I/71c-L3ZWaEL._SS500_.jpg",
          genre: "Pop", mood: "Energetic"},
        { title: "July", artist: "Noah Cyrus", rating: 3, time: 156, 
          img: "https://92zew.net/wp-content/uploads/2020/04/unnamed-180x180.jpg",
          genre: "Pop", mood: "Sad"},
        { title: "Hit Me Up", artist: "Omar Apollo", rating: 5, time: 160, 
          img: "https://m.media-amazon.com/images/I/91xa9ieQbpL._SS500_.jpg",
          genre: "Indie", mood: "Energetic"},
        { title: "Getaway", artist: "Saint Motel", rating: 4, time: 181, 
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Saintmotelevision_cover.jpg/220px-Saintmotelevision_cover.jpg",
          genre: "Pop", mood: "Happy"},
        { title: "idfc", artist: "blackbear", rating: 2, time: 245, 
          img: "https://i.pinimg.com/originals/a6/9a/ac/a69aac5ce170736ba51b412a0cca1846.jpg",
          genre: "Hip Hop", mood: "Sad"},
      ]
    };
  }

  // this function adds a song (from parameters) to the playlist
  addToPlaylist = (song) => {
    // gets the playlist as it is
    var playlist = this.state.playlist;

    // adds the song if its not already in the playlist
    if (!playlist.includes(song)){
      playlist.push(song);
    }
    // updates the playlist in state
    this.setState({ playlist });
  }

  // this function removes a song (from parameters) from the playlist
  removeFromPlaylist = (song) => {
    // gets the playlist and finds the index of the song
    var playlist = this.state.playlist;
    const index = playlist.indexOf(song);
    // removes the song from the playlist and updates the state
    playlist.splice(index, 1);
    this.setState({ playlist });
  }

  // what will be rendered in the overall app
  render(){
    return (
      <div className="App">
        {/* title component */}
        <div className="overall-title">Create a Playlist!</div>
        {/* overall app below */}
        <div className="app-container">
          {/* left side of the app just has the list and its filters (pass in the list and the function 
            to add a song to the playlist) */}
          <div className="left-side">
            <FilteredList list={this.state.songsList} playlist={this.state.playlist} addToPlaylist={this.addToPlaylist} />
          </div>
          {/* right side of the app has the aggregator(pass in the overall playlist to render and the function
            to remove a song from the playlist) */}
          <div className="right-side">
            {this.state.playlist.length > 0 ? <Playlist list={this.state.playlist} removeFromPlaylist={this.removeFromPlaylist}/> : null}
          </div>
        </div>
      </div>
    );
  }
}
