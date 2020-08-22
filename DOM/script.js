'use strict';

// DOM
// console.log(document.head);
// console.log(document.documentElement);
// console.log(document.body.childNodes);

// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);

// console.log(document.body.lastChild);
// console.log(document.body.lastElementChild);

// console.log(document.querySelector('#second').parentNode);  //wrapper
// console.log(document.querySelector('#second').parentNode.parentNode); //body

// console.log(document.querySelector('#second').parentElement); //body Element

// console.log(document.querySelector('[data-current="3"]')); //data Elem

// console.log(document.querySelector('[data-current="3"]').nextSibling); //next Node
// console.log(document.querySelector('[data-current="3"]').previousSibling); //prev Node

// console.log(document.querySelector('[data-current="3"]').nextElementSibling); //prev Elem
// console.log(document.querySelector('[data-current="3"]').previousElementSibling); //prev Elem



for(let node of document.body.childNodes) {
    if (node.nodeName == '#text' ) {
        continue;
    }
    console.log(node);
}