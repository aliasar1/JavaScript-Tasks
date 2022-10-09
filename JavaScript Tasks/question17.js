/*
Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
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

console.log(
    "\nSorry! We just found out that our new table wont arrive in time so I can only invite two people"
);

size = guests.length;
for(var i =0; i<size-2; i++){
    guests.pop();
    console.log("Sorry! The table is full!");
}

for(var i =0; i<guests.length; i++){
    console.log(`${guests[i]}! You are still invited`);
}

size = guests.length;
for(var i =0; i<size; i++){
    guests.pop();
}

console.log(guests);
console.log('Length of array: ' + guests.length);
