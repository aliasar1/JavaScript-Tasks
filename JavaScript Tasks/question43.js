/*
Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
*/

const magicians = ['Ali Asar', 'Adeel', 'Kamran'];
newMagicians = [];

for(var i=0; i<magicians.length; i++){
    newMagicians[i] = magicians[i];
}

function make_great(){
    for(var i=0; i<newMagicians.length; i++){
        newMagicians[i] = 'Great ' + newMagicians[i];
    }
}

function show_magicians(magiciansArray){
    for(var i=0; i<magiciansArray.length; i++){
        console.log(magiciansArray[i]);
    }
}

make_great();
show_magicians(magicians);
show_magicians(newMagicians);