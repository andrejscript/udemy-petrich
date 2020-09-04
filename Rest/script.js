'use strict';

//...Rest

const log = function(a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'usage'); // 'basic', 'rest', ['operator', 'usage']

// default params

const calcOrDouble = function(num, basis = 2) {
    console.log(num * basis);
};

calcOrDouble(3);



// const person = {
//     name: 'test',
//     age: 33,
//     voice: true,
//     action: function(text) {
//         console.log(text);
//     }
// };

// const newPerson = {...person};
// console.log(Object.keys(newPerson));

// // ...Arr;
// const range = [1, 2, 4, 7];
// const newRange = [...range];
// console.log(newRange);


// // ...Func

// function sum(x, y, z) {
//     return x + y + z;
//   }
  
//   const numbers = [1, 2, 3];
  
//   console.log(sum(...numbers));

//   console.log(sum.apply(null, numbers));
  