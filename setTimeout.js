//  Below code perform setTimeout function
// func=()=>{
//     setTimeout(func2=()=>{
//     document.getElementsByClassName("demo")[0].style.width="100%";
//     },3000)
// }


//  Below code Perform setInterval function
func=()=>{
   
    setInterval(func2=()=>{
    document.getElementsByClassName("demo")[0].style.width="100%";
    let a=document.getElementsByClassName("demo")[0].innerHTML="heyyy";
    alert("bhag")
},1000)
}
