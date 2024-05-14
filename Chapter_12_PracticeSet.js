
/*
Problem-1. 
Write a javaScript program to print the following 
After Twwo second .
Hello 
Worlds
*/
//Here We Use the Syntax of the IIFE function 
// (function print() {
//     setTimeout(() => {
//         console.log("Hello");
//         setTimeout(() => {
//             console.log("Worlds");
//         }, 2000);
//     }, 2000);
// })();
/*
Problem 2. Write a JavaScript program to find the Average of Five numbers
In an Array Using the spread syntax.
*/
// let arr = [12, 34, 56, 78, 90];
// Average = (a, b, c, d, e) => {
//     console.log(...arr)
//     return (a + b + c + d + e) / 5;
// }
// // Average(...arr);
// console.log(Average(...arr));

/*
Proble-3.
Write a JavaScript functions which resolves a promise 
After n seconds. The functions takes n as a parameter
Use an iife to execute the functions with different of n.
*/
(function func(n) {
    let prom = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("promise is resolved");
            reject("promise is resolved");
        }, n * 1000)
    });
    prom.then((result) => {
        console.log(result);
    })
    prom.catch((e) => {
        console.log(e);
    })

})(3);  // pass the value of n in seconds not milli seconds


// Problem 4 is to find the simple interest you can do easily
// simpl Interest=Principal*Time*Rate.