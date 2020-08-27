'use strict';

//   Date()

const now = new Date();

console.log(now);

// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getDate());
// console.log(now.getDay());

console.info('-----UTC-----');

// console.log(now.getHours());
// console.log(now.getUTCHours());

console.log(now.getTime());  //1598562936732 - mls from 01-01-1970

now.setHours(18); //  set hour
console.log(now);


console.info('Время работы');

let start = new Date();

for (let i = 0; i < 10000000; i++ ) {
    let some  = i ** 3;
}

let end = new Date();

console.log(`Время исполнения ${end - start}`);