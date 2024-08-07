// create a function called greet that takes a parameter
// log a greeting to that name in the function
function greet(name) {
    console.log(`hello, ${name},`);
}
// harder way to list a short amount of names
// let nameArr = ["Lily", "Robbie", "Lola", "Tyler", "Carl"];
// nameArr.forEach(name => { 
//     greet(name);
// })
// easy way to list short names
// greet("Lily");
// greet("Robbie");
// greet("Lola");
// greet("Tyler");
// greet("Carl");
module.exports = greet;
