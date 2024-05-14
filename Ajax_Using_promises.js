function loadData() {
    let prom = new Promise(func = (resolve, reject) => {
        let xhttp = new XMLHttpRequest();
        xhttp.open('GET', "prince.txt", true);
        xhttp.onload = function func4() {
            if (this.status == 200) {
                console.log("Data is Fetched");
                resolve(xhttp.responseText);
                document.getElementsByClassName("demo")[0].innerHTML = resolve(xhttp.responseText);
            }

            else {
                document.getElementsByClassName("demo")[0].innerHTML = reject("File Does Not found")
            }
        }
        xhttp.send();
    }).then(func2 = (res) => {
        console.log(res);
        document.getElementsByClassName("demo")[0].innerHTML = res;
    }).catch(func3 = (error) => {
        console.log(error);
        document.getElementsByClassName("demo")[0].innerHTML = error;

    })
    //     prom.then(func2 = (res) => {
    //         console.log(res);
    //         document.getElementsByClassName("demo")[0].innerHTML = res;
    //     }).catch(func3 = (error) => {
    //         console.log(error);
    //         document.getElementsByClassName("demo")[0].innerHTML = error;

    //     })
}