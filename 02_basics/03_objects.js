//  object literals

const mySym = Symbol("key1")



const jsUser = {
    name: "Hitesh",
    "full name": "Hitesh choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"])
// console.log(jsUser["full name"])
// console.log(jsUser[mySym])

jsUser.email = "hitesh@chatgpt.com"
// Object.freeze(jsUser)
jsUser.email = "hitesh@microsoft.com"
// console.log(jsUser)

jsUser.greeting = function() {
    console.log("Hello js user");
}


jsUser.greeting = function() {
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo())