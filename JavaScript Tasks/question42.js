/*
Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
*/

const magicians = ['Ali Asar', 'Adeel', 'Kamran'];

function show_magicians(magiciansArray){
    for(var i=0; i<magiciansArray.length; i++){
        console.log(magiciansArray[i]);
    }
}

function make_great(){
    for(var i=0; i<magicians.length; i++){
        magicians[i] = 'Great ' + magicians[i];
    }
}

make_great();
show_magicians(magicians);