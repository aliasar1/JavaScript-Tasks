/*
More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array
*/

var food = "Biryani";

console.log("Is food == 'Biryani'? I predict True.");
console.log(food == "Biryani");
console.log("Is food == 'haleem'? I predict False.");
console.log(food == "haleem");

var item = "chair";
console.log("Is item is lowercase == 'chair'? I predict True.");
console.log(item.toLowerCase() == 'chair');
console.log("Is item is uppercase == 'chair'? I predict True.");
console.log(item.toUpperCase() == 'chair');

if(4+1===5){
    console.log("4+1 is equal to 5");
}
if(4+'1'!=="5"){
    console.log("not equal");
}

var num = 2;
var str = "pen";

console.log("Is num==2 and str==pen? I predict True.");
console.log(num==2 && str=="pen");

console.log("Is num==2 and str!=pen? I predict False.");
console.log(num==2 && str!="pen");

console.log("Is num!=2 or str==pen? I predict True.");
console.log(num!=2 || str=="pen");
console.log("Is num!=2 and str!=pen? I predict False.");
console.log(num!=2 && str!="pen");

var arr=["Ali", "Ahmed"]
if(arr.includes("Ali")){
    console.log("'Ali' is present in array.");
} else {
    console.log("not present");
}


if(arr.includes("Kamran")){
    console.log("Kamran is present in list");
}
else{
    console.log("Kamran is not present in list");
}