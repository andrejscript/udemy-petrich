'use strict';

// THIS

// // // 1) Обычная функция this равен - window, если "use strict" - undefined 

// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }
 
// showThis(4, 5);



// // // 2) Контекст у методов объекта - сам объект 

// const object = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }

//         shout();
//     }
// };

// object.sum();



// // // 3) this в конструкторах и классах - это новый экземпляр объекта

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
// }

// const alex = new User('Alex', 22);


// ----------------------- THIS: CALL - APPLY

function sayName(surname) {
    console.log(this);
    console.log(this.name +' '+ surname);
}

let user = {
    name: 'Joe'
};

// // // 4) метод call передает в ф-цию контекст объекта заданного в значении, аргументы через запятую.
sayName.call(user, 'Smith');

// // // 5) метод apply передает в ф-цию контекст объекта заданного в значении, аргументы через массив.
sayName.apply(user, ['Smith']);



// --------------------------THIS: BIND

// // // 6) метод bind создает НОВУЮ функцию и подвязывает к определенному контексту.
function count(num) {
    return this * num;
}

const double = count.bind(2);

console.log(double(3));
console.log(double(4));
console.log(double(5));



//--------------------this () => Arrow func -----------------//

const btn = document.querySelector('button');

// // // 1) класс. стиль написания ф-ции - "function" - this = элемент вызова события 
// // this = e.target


btn.addEventListener('click', function() {
    console.log(this);
});


// // // 2) стрелочная ф-ция ()=> нет своего контекста this - берет у родителя

btn.addEventListener('click', function() {
    console.log(this);
});

// = //

btn.addEventListener('click', (e) => {
    console.log(e.target);
});

const obj = {
    num: 5,
    sayNumber: function() {
        const say = () => {
            console.log(this);
        };
    }
};

obj.sayNumber();

// () =>

const double2 = a => a * 2;
console.log(double2(4));