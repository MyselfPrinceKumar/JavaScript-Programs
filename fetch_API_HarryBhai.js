// load=()=>{

//     // this is the GET Request how data can be read using the fetch api
//     let promise = fetch("https://jsonplaceholder.typicode.com/posts");
// promise.then((value1) => {
//     return value1.json();
// }).then((value2) => {
//     console.log(value2);
//     // document.write(value2);
//     for(let i in value2){
//         // document.write(value2[i].title)
//         // document.write(value2[i].userId)
//         document.write(value2[i].id)
//         document.write("<br>");
//     }
// })

//     // let promise = fetch("prince.txt");
//     // promise.then((value1) => {
//     //     return value1.text();
//     // }).then((value2) => {
//     //     console.log(value2);
//     //     document.write(value2);
//     // })
// }

// POST Request ->It is used to insert the data 
InsertData = () => {

    let obj={
        title:"foo",
        body:"bar",
        userId:1
    }
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(obj),
        Headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        return response.json();
    }).then((result) => {
        console.log(result);
        // document.write(result);
        for(let i in result){
                    // document.write(value2[i].title)
                    // document.write(value2[i].userId)
                    document.write(result[i])
                    document.write("<br>");
                }

    })
}