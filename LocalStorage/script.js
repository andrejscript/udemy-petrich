'use strict';

// localStorage.setItem('numder', 5);
// console.log(localStorage.getItem('number'));
// localStorage.removeItem('number');
// localStorage.clear();
// localStorage.key('number');

// function forEachKey(callback) {
//     for (var i = 0; i < localStorage.length; i++) {
//       callback(localStorage.key(i));
//     }
//   }

const checkbox = document.querySelector('#checkbox'),
  form = document.querySelector('form'),
  change = document.querySelector('#color');

checkbox.addEventListener('change', () => {
  localStorage.setItem('isChecked', true);
});

if (localStorage.getItem('isChecked')) {
  checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.background = 'red';
}

change.addEventListener('click', () => {
  if (localStorage.getItem('bg') === 'changed') {
    localStorage.removeItem('bg');
    form.style.background = '#fff';
  } else {
    localStorage.setItem('bg', 'changed');
    form.style.background = 'red';
  }
});


const person = {
    name: 'ALex',
    age: 43
}

const serializedPerson = JSON.stringify(person);
localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));

