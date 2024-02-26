const person = {
    name: 'Rick',
    age: 78
  }
  
  // [ [ 'name', 'Rick' ], [ 'age', 78 ] ]
  
  function keyValuePairs(obj) {
    let personArray = [];
    for (let key in obj) {
    personArray.push([key, obj[key]]);}
    return personArray;
  };

  console.log(keyValuePairs(person));