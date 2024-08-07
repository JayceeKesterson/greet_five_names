const namesArr = ["Lily", "Carl", "Lola", "Robbie", "Tyler"
];
const namesArr2 = ["Luka", "Artem", "Kelly", "Gavin"];
// for loop
// for (let i = 0; i < namesArr.length - 1; i++) {
//     console.log('Hello, ${namesArr[i]}');
// }
// Take the values of the array and refer to each piece of data as a name and input that name in the console log when it is called

function greetNames(arr) { 
        arr.forEach((name) => {
        console.log(`Hello, ${name}`);
    });
};

// greetNames(namesArr);
// greetNames(namesArr2);
global.namesArr = namesArr;
global.greetNames = greetNames;
global.namesArr2 = namesArr2;
