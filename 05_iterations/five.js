const coading = ["js", "ruby", "java", "python", "cpp"]

// coading.forEach( function (val){
   // console.log(val);
//} )

//coading .forEach( (item) => {
   // console.log(item);
//} )


// coading.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// })

 const myCoading = [
    {
        languageName: "javascrippt",
        languageFileName: "js"
    },
    {
        languageName:"java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
 ]

 myCoading.forEach ( (item) => {
    console.log(item.languageName);
 })