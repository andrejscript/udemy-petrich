'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// console.log(box.clientHeight);
// console.log(box.clientHeight);

// console.log(box.offsetWidth);
// console.log(box.offsetHeight);

// console.log(box.scrollWidth);
// console.log(box.scrollHeight);

document.addEventListener('scroll', () => {
    console.log(box.scrollTop);
});

console.log(box.getBoundingClientRect());   // all cordinats
console.log(box.getBoundingClientRect().top);

const style = window.getComputedStyle(box); //el styles
console.log(style);
console.log(style.display);

const style2 = window.getComputedStyle(box, /*::Lbefore*/); //pseudo-el-styles

console.log(document.Element.scrollTop);

window.screenTop(0, 400);
window.screenBy(0, 400);