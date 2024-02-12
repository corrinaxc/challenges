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

let input = undefined
const data = typeof(input) 

switch (data) {
    case: undefined:
        console.log("undefined!");
        break;
    case: null
        console.log("null!");
        break;
    case: Number:
        console.log("number!");
        break;
    case: string
        console.log("string");
        break;
    case: Boolean:
        console.log("Boolean!");
        break
    case: BigInt:
        console.log("bigint!");
        break;
    case: function:
        console.log("function!")
        break;
    case: Object:
        console.log("object!")
        break;
    case: Array:
        console.log("array!")
        break;
    case: default:
        console.log("I have no idea!")
}

