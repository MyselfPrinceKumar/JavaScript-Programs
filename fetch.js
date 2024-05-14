function loadData(){
    fetch("prince.txt").then(func=(response)=>{
        return response.text();
    }).then(func2=(data)=>{
        console.log(data)
    document.write(data)
    document.getElementsByClassName("demo")[0].innerHTML=data;
    }).catch(func3=(error)=>{
        // console.log("we can't load the page")
        document.getElementsByClassName("demo")[0].innerHTML="can't Load the page"
        console.log(error);
    })
}
// function loadData() {
//     fetch("https://jsonplaceholder.typicode.com/users").then(func1 = (response) => {
//         return response.json();
//     }).then(func2 = (data) => {
//         console.log(data)
//         // document.write(data)
//         for (let i in data) {
//             document.write(data[i].name)
//             // document.write(data[i].address.city)
//             document.write("<br>")
//         }
//     }).catch(func3 = (error) => {
//         // console.log("we can't load the page")
//         document.getElementsByClassName("demo")[0].innerHTML = "can't Load the page"
//         console.log(error);
//     })
// }