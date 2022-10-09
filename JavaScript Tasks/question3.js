/*
Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
*/

var person = 'Ali asar';
console.log(person.toLowerCase());
console.log(person.toUpperCase());

function titleCase(string) {
    string = string.toLowerCase().split(" ");
    for (var i = 0; i < string.length; i++) {
        string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
    }
    return string.join(" ");
}
console.log(titleCase(person));