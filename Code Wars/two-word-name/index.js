// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F


function twoInitials(name) {
    const [firstName, lastName] = name.split(' ');
    const firstInitial = firstName[0].toUpperCase();
    const secondInitial = lastName[0].toUpperCase();
    console.log(`${firstInitial}.${secondInitial}`)
}

twoInitials("Ella cornish");

// function with name as the parameter as a string
// split the string and take the first character
// transform the letter into an uppercase
// set a variable for name which is a concatenated string with a dot in the middle
// console log this result 