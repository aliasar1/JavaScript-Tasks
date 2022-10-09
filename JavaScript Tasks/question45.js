/*
Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
*/

function car(manufacturer, model, color = "Black", power = "") {
  return {
    manufacturer: manufacturer,
    model: model,
    color: color,
    power: power,
  };
}

obj1 = car("BMW", "2021");
obj2 = car("Audi", "2012", "Grey", "1300");

console.log(obj1);
console.log(obj2);
