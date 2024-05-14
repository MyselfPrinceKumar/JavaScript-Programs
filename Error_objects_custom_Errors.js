try {

    console.log(prince);

    // let Age =200;
    // if (Age>100) {
        // Bellow line show how can create our custom errors
    //     throw new Error("This is Not Possible For Humans");
    // }
} catch (error) {
    // this all is the error objects
    console.log(error.name);   //It shows the name of the error
    console.log(error.message); // It shows the error message
    console.log(error.stack);   // It hsow the stack of the error
}