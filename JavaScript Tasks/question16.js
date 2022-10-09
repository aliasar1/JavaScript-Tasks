/*
More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
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