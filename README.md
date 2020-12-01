A web app that presents the user with a list of songs and allows them to aggregate them in a playlist.

This webpage is created using React and JavaScript. The overall composition is as follows; the "main" class of the application is the App.jsx class. This component stores the main information that the application displays (the total list of songs and the songs that have been added to the playlist) and renders them in the appropriate components. 
App.jsx also includes functions to add a song to the playlist and remove a song from the playlist that are passed into the appropriate components that require this functionality.
The app class overall renders the filtered list component and the playlist component (which is only rendered if there are actually songs in the playlist). The filtered list takes in the total list of songs, the method to add a song to the playlist (because the songs in the overall list will need this functionality), and the playlist (because the length of the playlist affects the width and style of the filtered list). The playlist takes in the list of songs that make up the playlist and the 

Organization of your components
How data is passed down through your components
How user interactions can trigger changes in the state of components