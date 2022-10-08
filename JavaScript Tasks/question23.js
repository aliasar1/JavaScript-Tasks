/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/

let vehicle = {
    type: "car",
    color: "black",
    capacity: 5,
    model: "2020"
}

let person = {
    name: "Ali",
    age: 20,
    qualification: "Bachelors",
    genger: "Male"
}

let game = {
    type: "Outdoor",
    name: "football"
}

console.log("Is vehicle type == 'car'? I predict true.");
console.log(vehicle.type == 'car');

console.log("Is vehicle color == 'black'? I predict true.");
console.log(vehicle.color == 'black');

console.log("Is vehicle capacity == 2? I predict false.");
console.log(vehicle.capacity == 2);

console.log("Is vehicle model == '2021'? I predict false.");
console.log(vehicle.model == 2021);

console.log("Is person name == 'Ali'? I predict true.");
console.log(person.name == 'Ali');

console.log("Is person age == '24'? I predict false.");
console.log(person.age == '24');

console.log("Is person qualification == 'Matric'? I predict false.");
console.log(person.qualification == 'Matric');

console.log("Is person gender == 'Male'? I predict true.");
console.log(person.genger == 'Male');

console.log("Is game type == 'Indoor'? I predict false.");
console.log(game.type == 'Indoor');

console.log("Is game name == 'football'? I predict true.");
console.log(game.name == 'football');