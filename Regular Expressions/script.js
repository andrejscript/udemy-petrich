'use strict';

// const ans = prompt('Type your name');
// const reg = /n/;
// console.log(ans.search(reg));

// const reg2 = /n/g;
// console.log(ans.match(reg));


// RegExp Flags

// i - все регистры
// g - все вхождения
// m - многострочный
// /./ - все элементы

// const pass = prompt('Password');
// console.log(pass.replace(/./g, "*"));

// /\./ экранирование символа. Замена в тексте управляющих символов на соответствующие текстовые подстановки

// console.log('12-34-56'.replace(/-/g, ':'));


// RegExp methods

// const ans = prompt('Type your name');
// const reg3 = /n/;
// console.log(reg3.test(ans)); //Ann - true, joe - false


// RegExp Classes

// \d - числа
// \w - слова
// \s - пробелы

// \D - не числа
// \W - не слова
// \S - не пробелы

// const ans = prompt('Enter your name');
// const reg3 = /\s/g;
// console.log(ans.match(reg3)); 

const str = 'my name is R2D2';
console.log(str.match(/\w\d\w\d/i));

