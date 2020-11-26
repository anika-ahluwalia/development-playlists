import './App.css';
import React from 'react';
import FilteredList from './FilteredList';
import 'bootstrap/dist/css/bootstrap.min.css';
import Playlist from './Playlist';

export default class App extends React.Component {

  constructor(props){
    super(props);
     
    this.state = {
      playlist: [],
      songsList: [
        { title: "Green Light", artist: "Lorde", rating: 5, time: 3.54, 
          img: "https://images.genius.com/135e9ae4d19e7816e0ffdd9a95922a0c.1000x1000x1.jpg",
          genre: "Indie", mood: "Energetic"},
        { title: "Sofia", artist: "Clairo", rating: 5, time: 3.08, 
          img: "https://images.genius.com/08dcb11c5d99d150b17b92a5e0f1f8b4.1000x1000x1.png",
          genre: "Indie", mood: "Happy"},
        { title: "POWER", artist: "Kanye West", rating: 4, time: 4.52, 
          img: "https://m.media-amazon.com/images/I/715Ag05hzQL._SS500_.jpg",
          genre: "Hip Hop", mood: "Energetic"},
        { title: "Pon de Replay", artist: "Rihanna", rating: 3, time: 4.06, 
          img: "https://i.pinimg.com/originals/99/59/21/9959212d85557bb497e322c66aec4b66.jpg",
          genre: "Pop", mood: "Energetic"},
        { title: "Jocelyn Flores", artist: "XXXTENTACTION", rating: 2, time: 1.59, 
          img: "https://i.pinimg.com/originals/c7/7e/60/c77e6003b548018f2bfc325efb54fa59.jpg",
          genre: "Hip Hop", mood: "Sad"},
        { title: "3 Nights", artist: "Dominic Fike", rating: 4, time: 2.57, 
          img: "https://m.media-amazon.com/images/I/71O5qaGo4zL._SS500_.jpg",
          genre: "Indie", mood: "Energetic"},
        { title: "Video Games", artist: "Lana Del Ray", rating: 3, time: 4.42, 
          img: "https://images.genius.com/25268f673e6364f69748e5f7bcc5aaa5.1000x1000x1.png",
          genre: "Indie", mood: "Sad"},
        { title: "8TEEN", artist: "Khalid", rating: 3, time: 3.48, 
          img: "https://upload.wikimedia.org/wikipedia/en/7/7d/Khalid_-_American_Teen.png",
          genre: "Hip Hop", mood: "Happy"},
        { title: "Vampire", artist: "Dominic Fike", rating: 5, time: 3.06, 
          img: "https://upload.wikimedia.org/wikipedia/en/4/4d/Dominic_fike_what_could_possibly_go_wrong.jpg",
          genre: "Indie", mood: "Happy"},
        { title: "Someone Like You", artist: "Adele", rating: 4, time: 4.45, 
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/1b/Adele_-_21.png/220px-Adele_-_21.png",
          genre: "Pop", mood: "Sad"},
        { title: "R.I.P. 2 My Youth", artist: "The Neighboorhood", rating: 5, time: 3.25, 
          img: "https://i.pinimg.com/originals/94/92/74/9492744da88ce7891d6ac912d0ea2fe4.jpg",
          genre: "Indie", mood: "Sad"},
        { title: "Saturday Sun", artist: "Vance Joy", rating: 3, time: 3.34, 
          img: "https://images-na.ssl-images-amazon.com/images/I/71yw%2BI5ObZL._SL1500_.jpg",
          genre: "Pop", mood: "Happy"},
        { title: "Knee Socks", artist: "Arctic Monkeys", rating: 4, time: 4.17, 
          img: "https://upload.wikimedia.org/wikipedia/en/0/04/Arctic_Monkeys_-_AM.png",
          genre: "Indie", mood: "Happy"},
        { title: "Pocketful of Sunshine", artist: "Natasha Bedingfield", rating: 4, time: 3.22, 
          img: "https://images-na.ssl-images-amazon.com/images/I/81-EGIxi8%2BL._SL1500_.jpg",
          genre: "Pop", mood: "Happy"},
        { title: "Broccoli", artist: "Lil Yachty", rating: 4, time: 3.45, 
          img: "https://upload.wikimedia.org/wikipedia/en/c/c4/BroccoliDRAM.jpg",
          genre: "Hip Hop", mood: "Happy"},
        { title: "Alleyways", artist: "The Neighboorhood", rating: 2, time: 4.27, 
          img: "https://upload.wikimedia.org/wikipedia/en/2/2f/Iloveyou_the_neighbourhood.jpeg",
          genre: "Indie", mood: "Sad"},
        { title: "Sunflower, Vol. 6", artist: "Harry Styles", rating: 4, time: 3.14, 
          img: "https://static.wikia.nocookie.net/harry-styles8955/images/a/af/Fine_Line_Cover_Art.jpeg/revision/latest/scale-to-width-down/340?cb=20191104185139",
          genre: "Pop", mood: "Happy"},
        { title: "BOY BYE", artist: "BROCKHAMPTON", rating: 4, time: 2.22, 
          img: "https://thefader-res.cloudinary.com/private_images/w_760,c_limit,f_auto,q_auto:best/brkcohamp_gigner_ovdlb9/brockhampton-new-song-boy-bye-detail-ginger-2019.jpg",
          genre: "Hip Hop", mood: "Energetic"},
        { title: "Moon & Stars", artist: "$NOT", rating: 3, time: 3.07, 
          img: "https://m.media-amazon.com/images/I/81Uny2pvwTL._SS500_.jpg",
          genre: "Hip Hop", mood: "Happy"},
        { title: "Saturn", artist: "RIZ LA VIE", rating: 5, time: 3.27, 
          img: "https://i.pinimg.com/736x/1a/94/3b/1a943b84847b0dff1735c309962b625a.jpg",
          genre: "Hip Hop", mood: "Happy"},
        { title: "Va Va Voom", artist: "Nicki Minaj", rating: 4, time: 3.03, 
          img: "https://static.wikia.nocookie.net/nickiminaj/images/1/11/Nicki_Minaj_-_Pink_Friday_Roman_Reloaded_%28Deluxe_Edition%29_-2012-.png/revision/latest?cb=20160807014104",
          genre: "Pop", mood: "Energetic"},
        { title: "Lucid Dreams", artist: "Juice WRLD", rating: 1, time: 4.00, 
          img: "https://e-cdns-images.dzcdn.net/images/cover/f8c4db1b0f346d6e4b1558f734ad4523/500x500.jpg",
          genre: "Hip Hop", mood: "Sad"},
        { title: "Knock Knock", artist: "Mac Miller", rating: 4, time: 3.22, 
          img: "https://m.media-amazon.com/images/I/81puBBNXi1L._SS500_.jpg",
          genre: "Hip Hop", mood: "Energetic"},
        { title: "lovely", artist: "Billie Eilish, Khalid", rating: 2, time: 3.20, 
          img: "https://upload.wikimedia.org/wikipedia/en/6/62/Billie_Eilish_%26_Khalid_-_Lovely.png",
          genre: "Pop", mood: "Sad"},
        { title: "Dog Days Are Over", artist: "Florence + The Machine", rating: 4, time: 4.11, 
          img: "https://images-na.ssl-images-amazon.com/images/I/61Khx8MZhvL._SY355_.jpg",
          genre: "Pop", mood: "Happy"},
        { title: "Potential Breakup Song", artist: "Aly & AJ", rating: 4, time: 3.39, 
          img: "https://m.media-amazon.com/images/I/71c-L3ZWaEL._SS500_.jpg",
          genre: "Pop", mood: "Energetic"},
        { title: "July", artist: "Noah Cyrus", rating: 3, time: 2.36, 
          img: "https://92zew.net/wp-content/uploads/2020/04/unnamed-180x180.jpg",
          genre: "Pop", mood: "Sad"},
        { title: "Hit Me Up", artist: "Omar Apollo", rating: 5, time: 2.40, 
          img: "https://m.media-amazon.com/images/I/91xa9ieQbpL._SS500_.jpg",
          genre: "Indie", mood: "Energetic"},
        { title: "Getaway", artist: "Saint Motel", rating: 4, time: 3.01, 
          img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Saintmotelevision_cover.jpg/220px-Saintmotelevision_cover.jpg",
          genre: "Pop", mood: "Happy"},
        { title: "idfc", artist: "blackbear", rating: 2, time: 4.05, 
          img: "https://i.pinimg.com/originals/a6/9a/ac/a69aac5ce170736ba51b412a0cca1846.jpg",
          genre: "Hip Hop", mood: "Sad"},
      ]
    };
    this.totalTime = 0;
  }

  addToPlaylist = (song) => {
    var playlist = this.state.playlist;
    if (!playlist.includes(song)){
      playlist.push(song);
      this.totalTime += song.time;
    }
    this.setState({ playlist });
  }

  removeFromPlaylist = (song) => {
    var playlist = this.state.playlist;
    const index = playlist.indexOf(song);
    playlist.splice(index, index + 1);
    this.totalTime -= song.time;
    this.setState({ playlist });
  }


  render(){
    return (
      <div className="App">
        <div className="overall-title">Create a Playlist!</div>
        <div className="app-container">
          <div className="left-side">
            <FilteredList list={this.state.songsList} addToPlaylist={this.addToPlaylist} />
          </div>
          <div className="right-side">
            <Playlist list={this.state.playlist} removeFromPlaylist={this.removeFromPlaylist} totalTime={this.totalTime}/>
          </div>
        </div>
      </div>
    );
  }
}
