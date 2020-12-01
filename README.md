This is a webpage that presents the user with a filterable list of songs and allows them to aggregate them in a playlist.

This webpage is created using React, JavaScript, and HTML/CSS. The "main" class of the application is the App.jsx class. This component stores the main information that the application displays (the total list of songs and the songs that have been added to the playlist) and renders them by creating instances of the appropriate corresponding components. 

App.jsx also includes functions to add a song to the playlist and remove a song from the playlist that are passed into the appropriate components that require this functionality. Because these functions modify and use variables that are stored in the state of the App class (total song list and playlist), they exist in the App class and are passed down as props into the components in which they will be called.

The App class overall renders the filtered list component and the playlist component (which is only rendered if there are songs in the playlist). 

The playlist takes in the list of songs that make up the playlist and the function to remove a song from the playlist (because the songs in the playlist will need this functionality). The playlist first renders the title and total time of the playlist (which is calculated by looping through the passed in list of songs). It then maps each song in the playlist that was passed in as a prop the a PlaylistCard component. This component takes in the songs that it is rendering and the function that removes it from the playlist. It renders the revelant song information in a pleasing layout and includes a button to remove the song from the playlist which will trigger a state change when pressed by calling the passed in function to remove the song from the playlist.

The filtered list takes in the total list of songs, the function to add a song to the playlist (because the songs in the overall list will need this functionality), and the playlist (because the length of the playlist affects the width and style of the filtered list). The filtered list renders the various filters that can be applied to the overall list of songs and the corresponding songs that fit these filters. This component first renders the corresponding filters and then renders the DisplayList component (which will render the list of songs that should be displayed). DisplayList takes in the list of songs that fit within the filter specifications (and are in the appropriate sorting order) and the function that adds songs to the playlist. It maps each item in the passed in list to a SongCard component. The SongCard component takes in a song and the function to add that song to the playlist. Similar to the PlaylistCard component, it renders the revelant song information in a pleasing layout and includes a button to add the song to the playlist which will trigger a state change when pressed by calling the passed in function to add the song to the playlist.

The user can trigger changes in the FilteredList by interacting with any of the filters that apply to the list or by adding a song to the playlist. Because the filtering specifications are stored as states in FilteredList.jsx, adjusting any of these specifications would cause a change in the state of that component and would cause it to re-render. Thus, the list of songs that is being passed into the DisplayList component would change and a different list of songs would be displayed. 

The other state changes happen when a song is added to or removed from the playlist. These interactions will both call the functions from the App class that change its state (playlist) and will cause the playlist to re-render (as described above).

Ultimately, the overall structures is as follows:

>                                App.jsx
>                                 /   \
> playlist, removeFromPlaylist() /     \ songList, playlist, addToPlaylist()
>                               /       \
>                      Playlist.jsx    FilteredList.jsx
>                             /           \
> song, removeFromPlaylist() /             \ filteredList, addToPlaylist()
>                           /               \
>                 PlaylistCard.jsx     DisplayList.jsx
>                                             \
>                                              \ song, addToPlaylist()
>                                               \
>                                           SongCard.jsx  