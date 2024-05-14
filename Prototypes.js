let a={
    name1:"prince",
    roll:27,
    data:"No",
     run:()=>{
        console.log("Bhag Re Madharchod Jaldi") ;   
    }
}


let b={
    name:"rock",
    roll2:67,
    data1:"yes",
     Stop:()=>{
        console.log("Tham Ja Madharchod") ;   
    }
}

a.__proto__=b
a.Stop();
b.Stop();
console.log(a.name);
console.log(a.roll);

// b.__proto__=a
// b.run();
// a.run();