'use strict';

//...SPREAD

// ...Obj;

const person = {
    name: 'test',
    age: 33,
    voice: true,
    action: function(text) {
        console.log(text);
    }
};

const newPerson = {...person};
console.log(Object.keys(newPerson));

// ...Arr;
const range = [1, 2, 4, 7];
const newRange = [...range];
console.log(newRange);


// ...Func

function sum(x, y, z) {
    return x + y + z;
  }
  
  const numbers = [1, 2, 3];
  
  console.log(sum(...numbers));

  console.log(sum.apply(null, numbers));
  