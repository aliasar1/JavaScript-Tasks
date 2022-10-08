/*
Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
*/

function make_album(artistName, albumTitle, numberOfTracks = 0){
    return {
        artistName: artistName,
        albumTitle: albumTitle,
        numberOfTracks: numberOfTracks 
    };
}

var obj1 = make_album('Arjit Singh', 'Yeh Jawani Hai Deewani');
var obj2 = make_album('Atif Aslam', 'Aadaat', 4);
var obj3 = make_album('Joji', 'Glimpse of us', 7);

console.log(obj1);
console.log(obj2);
console.log(obj3);