/**  Define a function called "make_album" that takes three parameters:
- "artist": A string representing the name of the album artist.
- "title": A string representing the title of the album.
- "tracks" (optional): An optional number representing the total number of tracks in the album.
The function creates an album object with the provided artist and title.
If "tracks" is provided, it adds the "tracks" property to the album object.*/
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album.tracks = tracks;
    }
    return album;
}
// Call the "make_album" function with different arguments and log the results.
console.log(make_album("Artist One", "The First Album")); // Output: { artist: 'Artist One', title: 'The First Album' }
console.log(make_album("Artist Two", "The Second Album")); // Output: { artist: 'Artist Two', title: 'The Second Album' }
console.log(make_album("Artist Three", "The Third Album", 12)); // Output: { artist: 'Artist Three', title: 'The Third Album', tracks: 12 }
