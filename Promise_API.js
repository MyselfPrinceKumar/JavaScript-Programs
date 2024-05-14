let p1 = new Promise(function (resolve, reject) {

    setTimeout(() => {
        resolve(` value1 is ${56}`);
        reject('rejected');
    }, 9000)
})
let p2 = new Promise(function (resolve, reject) {

    setTimeout(() => {
        resolve(`value2 is ${64}`);
        reject('rejected');
    }, 4000)
})
let p3 = new Promise(function (resolve, reject) {

    setTimeout(() => {
        resolve(`value3 is ${78}`);
        reject('rejected');
    }, 6000)
})
// p1.then((value) => {
//     console.log(value);
// });
// p1.catch((error) => {
//     console.log(error);
// });
// p2.then((value) => {
//     console.log(value);
// });
// p2.catch((error) => {
//     console.log(error);
// });
// p3.then((value) => {
//     console.log(value);
// });
// p3.catch((error) => {
//     console.log(error);
// });
/*  PROMISE API MOST IMPORTANT
*/

//Promise.all api show all the results atfer resolved if anyone is rejected it show error
// let promise_all=Promise.all([p1,p2,p3]);
// promise_all.then((value)=>{
    //     console.log(value);
    // })
    
    //Promise.allSettled api show all the results atfer resolved/failed 
// let promise_settle=Promise.allSettled([p1,p2,p3]);
// promise_settle.then((value)=>{
//     console.log(value);
// })

//Promise.race api wait for the first result if first is rejected then it gieves the error
// let promise_race=Promise.race([p1,p2,p3]);
// promise_race.then((value)=>{
//     console.log(value);
// })

//Promise.any api wait for the first result if first is rejected then it looks the another result
let promise_any=Promise.any([p1,p2,p3]);
promise_any.then((value)=>{
    console.log(value);
})