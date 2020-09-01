'use strict';

// OOP
// Свойство Object.prototype представляет объект прототипа Object.

const soldier = {
    health: 400,
    armor: 100,
    voice: function() {
        console.log('Hello');
    }
};

const john = {
    health: 100
};

// #1 __proto__

john.__proto__ = soldier;
console.log(john.armor);

// #2 setPrototype

Object.setPrototypeOf(john, soldier);
john.voice();

// #3 Object.create

const john2 = Object.create(soldier);