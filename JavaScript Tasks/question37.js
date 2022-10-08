/*
Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
*/

function make_shirt(size = "Large" || "Medium", text = "I love JavaScript"){
    console.log(`The size of the tshirt is ${size} and have a text ${text} written on it.`);
}

make_shirt();
make_shirt('Medium');
make_shirt("Small", "King");