// if
// const isUserLoggedin = true
// const temperature = 41

// if (  temperature === 40){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50")
// }
// console.log("Executed");

// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if(score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 1000

// if (balance > 500) console.log("test"), console.log("test2");

// if(balance < 500) {
//     console.log("less than");
// } else if(balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const UserLoggedin = true
const debitCard = true
const loggedInFromgoogle = false
const loggedInFromEmail = true

if(UserLoggedin & debitCard){
    console.log("Allow to buy  course");
}

if (loggedInFromgoogle || loggedInFromEmail) {
    console.log("User logged in")
}