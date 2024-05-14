(function () {
    let str = "prince rock"
    console.log("Hello Everyone");
    console.log(str);
})();
//IIFE function runs immediately when it is defined 
//It saves the memory by reducing the number of variables 

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

// spread Syntax in JavaScript
let array = [12, 24, 36];
let obj = { ...array };    // {...ArrName} this syntax converts the array into the objects
console.log(obj);

function sum(a,b,c){
    return a+b+c;
}
let result=sum({...array});   //It takes the object which is wrong 
// let result=sum(...array);  // It prints the correct result 
console.log(`The Sum is ${result}`);
console.log(...array)     //It prints the elemetns only