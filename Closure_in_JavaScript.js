// this is the lexical scoping which is also a closure
// function func1(a) {
//     let b = 23;
//     function func2() {
//         let sum = a + b;
//         console.log(sum);
//     }
//     func2();
// }
// func1(12);

// this is the Best example of the closure 
function func1(a) {
    let b = 23;
    function func2() {
        let sum = a + b;
        console.log(sum);
    }
    return func2;
}
let c = func1(12);
console.log(c);
c();
