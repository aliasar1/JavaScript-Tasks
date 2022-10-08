/*
No Users: Add an if test to Exercise 30 to make sure the list of users is not empty.
• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
*/

const users = ['Admin', 'Eric', 'Ali', 'Ahmed', 'Kamran'];

if(users.length > 0){
    console.log('Array is not empty.');
}

var arraySize = users.length;

for (var i = 0; i < arraySize; i++) {
    users.pop();
}

if(users.length > 0){
    console.log('Array is not empty.');
}
else{
    console.log('Array is empty.');
}