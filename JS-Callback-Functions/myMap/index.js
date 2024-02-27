numbers = [1, 2, 3, 4, 5];

function myMap (numbers, double) {
    const doubledArray = [" "];
    for (number of numbers) {
        const doubledNumber = double(number);
        doubledArray.push(doubledNumber);
    }
    return doubledArray;
}

function double(number) {
    return number * 2;
}

const doubleNumbers = myMap(numbers,double)
console.log(doubleNumbers);