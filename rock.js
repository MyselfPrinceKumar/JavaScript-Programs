 const prompt=require("prompt-sync")();

 let number = prompt("enter the number")
 for (let index = 1; index <=10; index++) {
   console.log(number + "x" + index + "=" + number * index)
 
 }