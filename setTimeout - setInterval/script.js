'use strict';

//setTimeout/setInterval

const btn = document.querySelector('.btn');
let timerID,
    i = 0;


function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 20);

    function frame() {
        if (pos == 300) {
            clearInterval();
        } else {
            pos++;
            elem.style.top = pos +'px';
            elem.style.left = pos +'px';
        }
    }
}

btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
//     timerID = setInterval(logger, 500);
// });


// // const timerID = setTimeout(logger, 2000);
// // clearTimeout(timerID); //отменяет таймаут

// function logger() {
//     console.log('Hello');
//     i++;
//     if (i === 3) {
//         clearInterval(timerID);
//     }
// }

// let id = setTimeout(function log() {
//     console.log('aaa');
//     id = setTimeout(log, 1500);
// }, 500);