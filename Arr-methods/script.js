'use strict';

// ARR METHODS


// Filter

const names = ['cat', 'doggy', 'pig', 'horse'];
const shortName = names.filter((name) => {
    return name.length < 5;
});
console.log(shortName);


// Map

const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(item => item.toLowerCase());
console.log(result);


//Every/Some

const some = [4, 'string', 'some'];
console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));


//Reduce 

const nums = [4, 5, 1, 3, 6, 11];

const res = nums.reduce((acc, item) => acc + item, 3);
console.log(res);


//add Obj...


const obj = {
    ivan: 'person',
    anna: 'person',
    vince: 'person',
    dog: 'animal',
    serg: 'person',
    cat: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'person')
.map(item => item[0]);

console.log(newArr);