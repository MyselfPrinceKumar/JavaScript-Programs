async function delhi() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise1 resolved");
        }, 5000);
    })
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise2 resolved");
        }, 7000);
    })

    // p1.then((value)=>{
    //     console.log(value);
    // })
    // p2.then((value)=>{
    //     console.log(value);
    // })

    let a1 = await p1;
    console.log(a1);
    let a2 = await p2;
    console.log(a2);
    // return [a1,a2]

}
console.log("Welcome to control Room")
delhi();