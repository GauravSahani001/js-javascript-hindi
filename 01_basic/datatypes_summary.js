// // Primitive Datatypes

// // 7 types : String, Number, Boolean, Null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTem = null
// let userEmail;

// const id = symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);
// // const bigNumber = 3456784567765458n

// //Reference (Non primitive)

// // Array, object, Function

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("hello world");
// }

// console.log(typeof bigNumber);

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++//

let myYoutubename = "hiteshchoudharydotcom"
let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);