/*
Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.
*/

const magicians = ['Ali Asar', 'Adeel', 'Kamran'];

function show_magicians(magiciansArray){
    for(var i=0; i<magiciansArray.length; i++){
        console.log(magiciansArray[i]);
    }
}

show_magicians(magicians);