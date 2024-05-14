// cookie in javaScript 
// document.cookie="user=prince"
// document.cookie="user=lool"
//this is way the to update a cookie
// document.cookie="user=rock"
// document.cookie="name=hero"
// console.log(document.cookie)

// let key=prompt("enter your key");
// let value=prompt("Enter you value")
// // we can show the encoded components by using decodeURIComponent("name") function this is used in the console
// document.cookie=`${encodeURIComponent(key)}= ${encodeURIComponent(value)}`
// console.log(document.cookie);



// LocalStorage 


// localStorage.setItem("name", "prince");
// localStorage.setItem("roll_no", 27);
// localStorage.setItem("name", "rock");
// localStorage.setItem("user", "bhosdiwala");

// localStorage.getItem("roll_no");
// console.log(localStorage);
// console.log(localStorage.length);
// let key = prompt("Enter the College");
// let value = prompt("Enter the College");
// let n = localStorage.setItem(key, value);
// localStorage.removeItem("user");
// console.log(n);

// sessionStorage

sessionStorage.setItem("name", "prince Kumar");
sessionStorage.setItem("roll", "27");
sessionStorage.setItem("college", "BVP PUNE");
console.log(sessionStorage.getItem("name"));
console.log(sessionStorage.length);
console.log(sessionStorage.key(0));
console.log(sessionStorage.key(1));
console.log(sessionStorage.key(4));
