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

// test("getAnimals() returns a string 'I totally love cats!' if called with the argument 'cats'.", () => {
//     const result = getAnimal("cats");
//     expect(result).toBe("I totally love cats!");
//   });
//   test("getAnimals() returns a string 'I like [animalPluralName]!' if called with a string argument.", () => {
//     const result = getAnimal("dogs");
//     expect(result).toBe("I like dogs!");
//   });
//   test("getAnimals() returns a string 'I do not like animals at all!' if called without arguments.", () => {
//     const result = getAnimal();
//     expect(result).toBe("I do not like animals at all!");
//   });