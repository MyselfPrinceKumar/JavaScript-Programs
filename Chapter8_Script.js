/* Problem-1. Write a program to show Different alert 
When Different buttons Are Clicked By the user
*/
// let a=document.getElementsByClassName("first")[0]
// a.onclick=()=>{
//     alert("first button pe click kr diya Laude Ne")
// }
// let b=document.getElementsByClassName("second")[0]
// b.onclick=()=>{
//     alert("Second button pe click kr diya Laude Ne")
// }
/*
Problem-2. Write a JavaScript Program to keep fetching
contents of a Website Every 5 Second
*/


// let t1=setTimeout(function(){
//         alert("hello Madharchod Man")
// },5000)
//     console.log(timerId1)
//     clearTimeout(timerId1)


// let timerId2 = setInterval(function () {
//     alert("hello Young Man")
// }, 3000)
// console.log(timerId2)
// clearInterval(timerId2)
/*Problem-4. Create a Website Which is capable of Storing
 bookmarks of your favoroute Website using Event Listener
*/
let x=function(e){
    alert("Ye Badhiya tha Guru")
    
}
let Y=function(e){
    alert("Risk Hai")
}
B1.addEventListener('click',x)
B1.addEventListener('click',Y)
B2.addEventListener('click',x)
B2.addEventListener('click',Y)
B3.addEventListener('click',x)
B3.addEventListener('click',Y)
B4.addEventListener('click',x)
B4.addEventListener('click',Y)
/* Problem-5. Create a Glowing Bulb effect using classList toggle method
*/
// bulb.className="yellow red"
// bulb.classList.add(red)
// bulb.className="yellow red"
// bulb.classList.add("red")
first.className = "text-black red"
first.classList.add("red")
first.classList.remove("red")
first.classList.contains("red")
first.classList.toggle("red")