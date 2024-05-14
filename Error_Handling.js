/*
If the error are encountered then execution of the code is stop
it show the occured error and it does not execute remaining code
 console.log("Hacking gulsan's phone");
 console.log("Fetching gulsan's facebook id and password");
 console.log("Hacking Wi-Fi password" + hello);
 console.log("Hacking TV remote");
*/
/*
If the error are encountered then execution of the code is Not stop
it show the occured error and it execute the remaining code
 try {
     console.log("Hacking gulsan's phone");

 } catch (error) {
     console.log(error);
 }
 try {
     console.log("Fetching gulsan's facebook id and password");

 } catch (error) {
     console.log(error);
 }
 try {
     console.log("Hacking Wi-Fi password" + hello);
 } catch (error) {
     console.log(error);
 }
 try {
     console.log("Hacking TV remote");

 } catch (error) {
     console.log(error);
 }
 */
/*
Remember try-catch block works synchronously .
it does not works if  Asynchronous function are attached inside the 
try catch block .
Asynchronous function like-setTimeout,setTimeinterval,.promise class
see belloew example
Bellow problem are solved by putting try-catch block inside the Asynchronous function
*/

try {
    setTimeout(() => {
        console.log("Hacking gulsan's phone");
    }, 2000)

} catch (error) {
    console.log(error);
}
try {
    setTimeout(() => {
        console.log("Fetching gulsan's facebook id and password");
    }, 4000)

} catch (error) {
    console.log(error);
}
try {
    setTimeout(() => {
        console.log("Hacking Wi-Fi password" + hello);
    }, 6000)
} catch (error) {
    console.log(error);
}
try {
    setTimeout(() => {
        console.log("Hacking TV remote");
    }, 8000)

} catch (error) {
    console.log(error);
}
