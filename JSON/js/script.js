'use strict';

//...JSON


const inputUah = document.querySelector('#uah'),
      inputUsd = document.querySelector('#usd'),
      request = new XMLHttpRequest();

inputUah.addEventListener('input', () => {
    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    // request.addEventListener('readystatechange', () => {
    request.addEventListener('load', () => {
        if(request.status === 200) {
            const data = JSON.parse(request.response);
            inputUsd.value = (+inputUah.value / data.current.usd).toFixed(2);
        } else {
            inputUsd.value = 'try again';
        }
    });
});
