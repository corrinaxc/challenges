// Create a file named logType.js.
// Declare a variable named data.
// Write a switch statement that takes the typeof data and logs a different string depending on the type/value of data.
// The string it logs should be one of the following:

//"undefined!"
//"null!"
//"number!"
//"not a number!"
//"string!"
//"boolean!"
//"bigint!"
//"function!"
//"object!"
//"array!"
//"I have no idea!"

let input = 9;
const data = typeof(input);

switch (data) {
    case "undefined":
        console.log("undefined!");
        break;

    case "number":
        console.log(isNaN(input) ? 'number!' : 'not a number!');
        break;

    case "string":
        console.log("string");
        break;

    case "boolean":
        console.log("Boolean!");
        break;

    case "bigint":
        console.log("bigint!");
        break;

    case "function":
        console.log("function!")
        break;

    //pay attention to the object types below
    case "object":
        if (Array.isArray(data)) {
            console.log("array!")
        } else if (data === null) {
            console.log("null!")
        } else {
            console.log("object!")}
     break;

    default:
        console.log("I have no idea!");
}