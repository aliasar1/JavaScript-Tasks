/*
Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
*/

const guests = ["Sir Qasim", "Miss Hira", "Sir Zia", "Sir Daniyal"];

for(var i =0; i<guests.length; i++){
    console.log(`I would like to have dinner with ${guests[i]}.`);
}

console.log(`${guests[1]} is not coming.`);

guests[1] = "Sir Khalid";

for(var i =0; i<guests.length; i++){
    console.log(`I would like to have dinner with ${guests[i]}.`);
}

console.log('I found a bigger table for dinner!');


guests.unshift('Sir Huzaifa');
var size = guests.length;
guests.splice(size/2,0, 'Sir Khurram');
guests.push("Sir Adeel");

for(var i =0; i<guests.length; i++){
    console.log(`I would like to have dinner with ${guests[i]} on big table.`);
}

console.log(guests);
console.log('Length of array: ' + guests.length);