/*
Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
*/

const favorite_fruits = ['Apple', 'Mango', 'Peach'];
for (var i = 0; i < favorite_fruits.length; i++) {
    if ("Apple" == favorite_fruits[i]) {
        console.log("You really like! " + favorite_fruits[i]);
    }
    if ("Mango" == favorite_fruits[i]) {
        console.log("You really like! " + favorite_fruits[i]);
    }
    if ("Peach" == favorite_fruits[i]) {
        console.log("You really like! " + favorite_fruits[i]);
    }
    if ("Strawberry" == favorite_fruits[i]) {
        console.log("You really like! " + favorite_fruits[i]);
    }
    if ("Banana" == favorite_fruits[i]) {
        console.log("You really like! " + favorite_fruits[i]);
    }
}
