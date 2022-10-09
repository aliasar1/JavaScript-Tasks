/*
Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/

const friends = ['Ahmed', 'Kamran', 'Sami', 'Ali'];

for(var i = 0; i<friends.length; i++){
    console.log(`Hello! ${friends[i]}`);
}