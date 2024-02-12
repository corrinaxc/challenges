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

let input = "hi";
const data = typeof(input);

switch (data) {
    case "undefined":
        console.log("undefined!");
        break;
    case "null":
        console.log("null!");
        break;
    case "number":
        console.log("number!");
        break;
    case "string":
        console.log("string");
        break;
    case "boolean":
        console.log("Boolean!");
        break
    case "bigint":
        console.log("bigint!");
        break;
    case "function":
        console.log("function!")
        break;
    case "object":
        console.log("object!");
        break;
    case "array":
        console.log("array!");
        break;
    default:
        console.log("I have no idea!")
}

if (data = "number") {
    console.log("number!");
} else {
    console.log("not a number!");
}