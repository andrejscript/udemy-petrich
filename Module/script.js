'use strict';

// Module creating

const number = 1;

// first way

(function() {  // anonymous self-calling func
  let number = 2;                     //
  console.log(number);                // Module scope
  console.log(number + 3);      

}()); 

console.log(number);

// second way

const user = (function() {
  const privat = function() {
    console.log('Private');
  };

  return {
    sayHello: privat
  };

}());

user.sayHello();

