// const promiseOne = new Promise(function(resplve, reject){
//  // Do an async task  
//  // DB calls, cryptography, network
//  setTimeout(function(){
//     console.log('Async task is compelete');
//  }, 3000)

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })

// new promise(function(resolve, reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve()
//     }, 1000)
// }).then(function(){
//     console.log("Async 2 resolve");
// });

fetch('https://api.gethub.com/user/hiteshchoudhary')
.them((response) => {
    return response.json()
})

.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))