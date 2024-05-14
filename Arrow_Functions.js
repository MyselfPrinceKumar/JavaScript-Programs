// let sayHello=(name)=>{
//     console.log(`This is the name : ${name}`)
// }
// sayHello("prince");

let x = {
    name: "prince",
    role: "Full Stack Developer",
    Exp: "Fresher",
    some1: function show() {

        setTimeout(function () {
            //this keyword cannot access the value which outside of the 
            //block with normal function but Arrow function solve problem
            console.log(this);  //It prints the window objects 
            console.log("the name is " + this.name)
        }, 2000)
    },

    some2: function show() {

        setTimeout(() => {
            //this keyword cannot access the value which outside of the 
            //block with normal function but Arrow function solve problem
            console.log(this);  //It take values from out of the scope.Because of Arrow function
            //Arrow functions take value from its lexical parent which is x object 
            console.log("the name is " + this.name)
        }, 4000)
    }
}


console.log(x.name);
x.some1();
x.some2();