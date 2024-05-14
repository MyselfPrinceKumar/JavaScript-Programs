/*Problem->Write a javaScript program to pretend look like a 
hacker Write an Async function Which will simply display the following things


         Initialising Hack Program ....
         Hacking Gulsan's Phone ...
         Connnecting to instagram....
         gulsan's user name found gulsanKushwah777
         gulsan's instagram password found gul@779483

*/
async function hacker() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Initialising Hack Program.....");
            reject("hack program failed");
        }, 1000);
    });
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Hacking Gulsan's Phone");
            reject("Gulsan's Phone not  Found");
        }, 2000);
    });
    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Connecting to Instagram......");
            reject("Instagram Account does Not Found ");
        }, 3000);
    });
    let p4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("gulsan's user name found gulsanKushwah777");
            reject("UserName not Found");
        }, 4000);
    });
    let p5 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("gulsan's instagram password found gul@779483");
            reject("Password Not found");
        }, 5000);
    });
    // let a1 = await p1;
    // console.log(a1);
    // let a2 = await p2;
    // console.log(a2);
    // let a3 = await p3;
    // console.log(a3);
    // let a4 = await p4;
    // console.log(a4);
    // let a5 = await p5;
    // console.log(a5);
    try {
        let a1 = await p1;
        console.log(a1);
    } catch (error) {
        console.log(error);
    }
    try {
        let a2 = await p2;
        console.log(a2);
    } catch (error) {
        console.log(error);
    }
    try {
        let a3 = await p3;
        console.log(a3);
    } catch (error) {
        console.log(error);
    }
    try {
        let a4 = await p4;
        console.log(a4);
    } catch (error) {
        console.log(error);
    }
    try {
        let a5 = await p5;
        console.log(a5);
    } catch (error) {
        console.log(error);
    }
}
hacker();
console.log("Welcome to Hacking World..")
// document.getElementsByClassName("hacker1")[0].innerHTML=hacker();