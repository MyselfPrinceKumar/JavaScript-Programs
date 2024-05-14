// func1=(name1)=>{
//     console.log("Hello "+name1);
// }
// func2=(name,callback)=>{
//     console.log(" Hii " + name);
//     callback("rock");

//     //callback is variable which calls the function which is passed in the parameter
// }
// func2("prince",func1)
func=(callback)=>{
    
    setTimeout(func1=()=>{
        console.log("Hello")
        //callback is variable which calls the function which is passed in the parameter
        callback("rock");
    },3000)
}
func2=(name)=>{
    console.log(" Hii " + name);

}
func(func2)

