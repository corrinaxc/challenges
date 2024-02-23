console.clear();

const animalStrings = [
  "cat",
  "dog",
  "elephant",
  "rabbit",
  "lion",
  "tiger",
  "horse",
  "giraffe",
  "zebra",
  "penguin",
  "polar bear",
  "panda",
  "koala",
  "kangoroo",
  "monkey",
  "sloth",
  "hippo",
  "rhino",
];

const hippoExists = animalStrings.includes("hippo");
console.log(hippoExists);

const catStartingFromIndexFiveExists = animalStrings.slice(5).includes("cat");
console.log(catStartingFromIndexFiveExists);

const firstAnimalStartingWithLetterP = animalStrings.find((animal) => animal.startsWith("p"));
console.log(firstAnimalStartingWithLetterP);

const indexOfGiraffe = animalStrings.findIndex((animal) => animal === "giraffe");
console.log(indexOfGiraffe);

const animalsSortedAlphabetically = animalStrings.slice().sort((a,b) => {
  if (a < b) {
    return -1;
  }
  if (a > b) {
    return 1;
  }
  return 0;
});

console.log(animalsSortedAlphabetically);

const anyAnimalEndsWithLetterZ = animalStrings.find((animal) => animal.endsWith("z"));
console.log(anyAnimalEndsWithLetterZ);

const everyAnimalHasMoreThanTwoLetters = animalStrings.every((animal) => animal.length > 2);
console.log(everyAnimalHasMoreThanTwoLetters);

const sumOfAllAnimalCharacters = animalStrings.reduce((a,b) => a + b);
console.log("sumOfAllAnimalCharacters", sumOfAllAnimalCharacters.length);

// Map way

let sumOfAllAnimalCharactersWithMap = 0

const lengthOfAnimalCharacters = animalStrings.map((animal) => {
  sumOfAllAnimalCharactersWithMap += animal.length;
  return animal.length;})

console.log("sumOfAllAnimalCharacters with map ", sumOfAllAnimalCharactersWithMap);

export {
  hippoExists,
  catStartingFromIndexFiveExists,
  firstAnimalStartingWithLetterP,
  indexOfGiraffe,
  animalsSortedAlphabetically,
  anyAnimalEndsWithLetterZ,
  everyAnimalHasMoreThanTwoLetters,
  sumOfAllAnimalCharacters,
};
