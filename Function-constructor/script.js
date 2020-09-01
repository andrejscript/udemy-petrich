'use strict';

// Functions-constructors

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = () => {
        console.log(this.name);
    };
}


User.prototype.exit = function() {
    console.log(`${this.name} exit`);
};

const alex = new User('Alex', 22);
const john = new User('John', 22);


// ---------------

console.log(alex, john);
alex.hello();
john.hello();
alex.exit();