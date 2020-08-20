'use strict';

// EVENT
// Add/Remove EventListener

const btn = document.querySelector('.btn'),
      link = document.querySelector('a');

let i = 0;

const delEl = (e) => {
    e.preventDefault();
    console.log(i);
    i++;
    if (i >= 6) {
        btn.removeEventListener('click', delEl);
    }
    console.log(e.currentTarget);
    console.log(e.target);
};

btn.addEventListener('click', delEl);


//preventDefault

link.addEventListener('click', (e)=> {
    e.preventDefault();
    console.log('locked');
});

