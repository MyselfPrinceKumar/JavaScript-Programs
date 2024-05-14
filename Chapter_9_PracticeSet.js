/*  Proble-3.
Create a promise which Rejects after 3 secends Use an async await
To get its value Use a try-Catch to handle its error
*/
// async function func1() {

//     let prom = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // resolve("resolved");
//             reject("promise is rejected");
//         }, 3000)
//     });
//     try {
//         let a1 = await prom;
//         console.log(a1);

//     } catch (error) {

//         console.log(error);
//     }
// }
// func1();
/*
Problem-4.
Write a program using promise.all inside an async/await to
await 3 promises compare its result with the case where we
await these promises one by one.
*/
async function func2() {
    let p1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("First promise is the Resolve");
            reject("First promise is the rejected");
        }, 8000);
    })

    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Second promise is the Resolve");
            reject("Second promise is the rejected");
        }, 4000);
    })

    let p3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("third promise is the Resolve");
            reject("third promise is the rejected");
        }, 6000);
    })
    // try {
    //     let a1 = await p1;
    //     console.log(a1)
    //     let a2 = await p2;
    //     console.log(a2)
    //     let a3 = await p3;
    //     console.log(a3)
    let a4 = Promise.all([p1, p2, p3]);
    try {
        a4.then((result) => {
            console.log(result);
        })
    } catch (error) {
        a4.catch((error) => {
            console.log(error);
        })
    }
}
func2();
