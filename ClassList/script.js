'use strict';

//ClassList

const btns = document.querySelectorAll('.button'),
      block = document.querySelector('.btn-block');

// console.log(btns[2].classList.length); // кол-во классов
// console.log(btns[1].classList.item(1)); // обращение к классу
// console.log(btns[0].classList.add('add')); // добавление класса
// console.log(btns[0].classList.remove('red')); // удаление класса
// console.log(btns[0].classList.toggle('blue')); // смена наличия / отсутствия класса


// e.target
  
block.addEventListener('click', (e) => {
    if (e.target && e.target.tagName == 'BUTTON') {
    // if (e.target.classList.contains('red')) {
        console.log(e.target.innerHTML);
    }
});


//matches

block.addEventListener('click', (e) => {
    if (e.target && e.target.matches('button.red')) {
    // if (e.target.classList.contains('red')) {
        console.log('mathes');
    }
});