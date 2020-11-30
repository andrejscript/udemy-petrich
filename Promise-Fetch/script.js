'use strict';

// Promise Fetch

// const req = new Promise(function(resolve, reject){

//     setTimeout(() => {
            
//     const backendData = {
//         server: 'aws',
//         port: '2000',
//         status: 'working'
//     };
//     resolve(backendData);
//         console.log('Data start', backendData);
//     }, 3000);


// })
// req.then((data) => {
//     data.time = '5 sec';
//     console.log('Data prepearing...')
//     return data;
// })
// req.then((dataOut) => {
//     console.log('Data ready:', dataOut);
// });


// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
// 	.then(json => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Alex'
  }),
  headers: {
    'Content-type': 'application/json'
  }

})
  .then(response => response.json())
  .then(json => console.log(json));
  