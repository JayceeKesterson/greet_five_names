const greet = require('./greet.js');
const goodbye = require('./goodbye.js');
const nameObj = {
    name1: "Lily",
    name2: "Carl",
    name3: "Lola",
    name4: "Robbie",
    name5: "Tyler"
};
const nameObj2 = {

};


function saluteNames(obj) {
    for (let name in obj) {
        greet(obj[name]);
        goodbye(obj[name]);
        // console.log(`Hello, ${nameObj[name]}`);
    }
};
saluteNames(nameObj);
saluteNames(nameObj2);