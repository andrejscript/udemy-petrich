'use strict';

// const newObj = new Object;

const person = {
    name: 'test',
    age: 33,
    voice: true,
    colors: {
        hair: 'black',
        body: 'white'
    },
    action: function(text) {
        console.log(text);
    }
};

// console.log(person.action('hi'));
// console.log(person.colors.hair);
// console.log(Object.keys(person).length);

// Destructuring

let {hair, body} = person.colors;

console.log(hair);