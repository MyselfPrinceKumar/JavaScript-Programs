
// let p=20;    //Global variable it can be used anywhere in the program

// function fun(){
//     let a=23;
//     var b=23;
//     console.log(a);
//     console.log(b);
//     console.log(p)
// }
// fun();
// console.log(p)
// // console.log(a);
// console.log(b);
//var is the global level variable and let is the block level variable 

// hoisting concept in javaScript most important for interview
// declaration is hoisted on the top but initialization is not be hoisted on the top
// console.log(a)
// func()
// function func(){
//     console.log("this is the function")
//     // console.log(a)
// }

// let a;  //let and const is not hoisted on the top
// // var a;    //var is hoisted on the top
// var a=9;    //var is hoisted on the top



const a = "the", b = "no"
const c = { a, b };
console.log(c)