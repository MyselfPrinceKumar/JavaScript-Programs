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