//Destructuring Assignment is JavaScript


let arr = [12, 24, 36, 48, 60, 90];

// let [a,b,c]=arr;
// console.log(a,b,c);

// let [a,b,...rest]=arr;
// console.log(a,b,rest);

// let [a, , , ...rest] = arr;
// console.log(a, rest)

//We can do destructuring like this 
//this is most used example object
let { a, b } = { a: 1, b: 8 };
console.log(a, b);