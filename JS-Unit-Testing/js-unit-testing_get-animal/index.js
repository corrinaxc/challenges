export function getAnimal(animal) {
    if (animal === 'cats') {
        console.log("I totally love cats");
    }
    else if (animal) {
        console.log(`I like ${animal}s!`);
    }
    else {
        console.log("I do not like animals at all!")
    }
}

getAnimal();