'use strict';

// Encapsulation
//Func constructors

// function User(name, age) {
//     this.name = name;
//     let userAge = age;

//     this.say = function() {
//         console.log(name, userAge);
//     };

//     this.getAge = function() {
//         return userAge;
//     };

//     this.setAge = function(age) {
//         if ( typeof age === 'number' && age > 0 && age < 110) {
//             userAge = age;
//         } else {
//             console.log('Invalid value');
//         }
//     };
    
// }

// const john = new User('John', 32);

// console.log(john.name);
// console.log(john.userAge);
// console.log(john.getAge());

// john.setAge(44);
// john.setAge(120);
// console.log(john.getAge());

// john.say();



//Func Class

class User {

    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Smith';  //private property

    say = () => {
        console.log(this.name, this.#surname, this._age);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if ( typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Invalid value');
        }
    }

    get surname() {   //private property get
        return this.#surname;
    }

    set surname(surname) {  //private property set
        this.#surname = surname;
    }
    
}

const john = new User('John', 32);

// console.log(john.age);
// john.age = 99;
console.log(john.surname = 'filch');
john.say();




