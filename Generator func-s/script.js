'use strict';

//Generator func


// #1
// function* generator() {
//     yield 's';
//     yield 'p';
//     yield 'a';
//     yield 'm';
// }

// const str = generator();
// console.log(str.next());
// console.log(str.next());
// console.log(str.next());
// // console.log(str.next());
// // console.log(str.next());
// console.log(str.next().value);


// #2
function* count (n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

const counter = count(7);

// console.log(counter.next().value);
// console.log(counter.next().value);
// console.log(counter.next().value);


// #3
for (let k of count(7)) {
    console.log(k);
}