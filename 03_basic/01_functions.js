// function sayMyName(){
//     console.log("H")
//     console.log("i")
//     console.log("t")
//     console.log("e")
//     console.log("s")
//     console.log("H")
// }

// sayMyName()

// function addTwoNumber( number1, number2 ){
//     console.log(number1+number2);
// }

function addTwoNumber( number1, number2 ){
    // let result = number1 + number2
    // return result
    return number1 +number2
}
 const result = addTwoNumber(5, 8)

//  console.log("Result: ", result);

function loginUserMessage(username = "sam"){
   if(!username){
    console.log("Please enter a username");
    return
   }
 
   return `${username} just logged in`
}
 

console.log(loginUserMessage("hitesh"))