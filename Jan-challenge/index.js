// 1

const person = {
    name: 'Rick',
    age: 78
  }
  
  function keyValuePairs(obj) {
    let personArray = []; //iterate over object - get key and value
    for (let key in obj) {
    personArray.push([key, obj[key]]);}
    return personArray;
  };

  console.log(keyValuePairs(person));


// 2

const nums = [1, 2, 3, 4]

const beatles = ['john', 'paul', 'george', 'ringo']

function myMap(arr, callback) {
  const result = [];
  for (let el of arr) {
    const changed = callback(el);
    result.push(changed);
  }
  return result;
}

const doubled = myMap(nums, function(el) {
  return el * 2
})

const prefixedBeatles = myMap(beatles, function(el) {
  return 'Mr ' + el
 }) 

console.log(doubled);
console.log(prefixedBeatles);