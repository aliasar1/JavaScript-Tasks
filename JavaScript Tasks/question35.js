/*
Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
*/

const animals = ['Cow', 'Goat', 'Sheep'];

for(var i=0; i<animals.length; i++){
    console.log(animals[i]);
}

for(var i=0; i<animals.length; i++){
    console.log(`${animals[i]} would be a great pet!`);
}

console.log('These all animals have 4 legs. They mostly eats grass. They are halal to eat.');